import {Client} from 'discord.js';
import {getMsgAuthorName} from "../../Helpers/ChatMessageHelpers";
import {DiscordMessage} from "../../DTO/DiscordMessage";
import {IRouter} from "../../Routing/IRouter";
import {EmojiReference} from "../../DTO/EmojiReference";
import {EmojiContainer} from "./EmojiContainer";
import {DiscordControllerResponse} from "../..";
import {IChatCommand} from "../../ChatCommands/IChatCommand";
import {ChatCommandsService} from "../ChatCommands/ChatCommandsService";

export class DiscordService {
    private readonly discordClient;
    private readonly token: string;
    private readonly adminIds: Map<string, null>;
    private router: IRouter;
    private emojis: EmojiContainer = new EmojiContainer();
    private readonly commands: Map<string, IChatCommand>;
    private readonly commandService: ChatCommandsService;

    constructor(discordClient: Client, router: IRouter, token: string, adminIds: Map<string, null>, chatCommandsService: ChatCommandsService) {
        this.discordClient = discordClient;
        this.router = router;
        this.token = token;
        this.adminIds = adminIds;
        this.commandService = chatCommandsService;

        this.setupHandlers();
    }

    public setRouter(router: IRouter)
    {
        this.router = router;
    }

    private setupHandlers() {
        this.discordClient.on("message", msg => {
            if (msg.author.bot) {
                return;
            }

            let imageUrls: string[] = [];

            msg.attachments.forEach(attachment => {
                if (attachment.url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
                    imageUrls.push(attachment.url);
                }
            });

            let parsedMessage = new DiscordMessage(
                msg.author.id,
                msg.author.discriminator,
                getMsgAuthorName(msg),
                msg.guild !== null ? msg.guild.id : null,
                msg.guild !== null ? msg.guild.name : 'dm',
                msg.channel.id,
                msg.channel.name,
                msg.content,
                imageUrls,
                this.adminIds.has(msg.author.id),
                msg.channel.type === 'dm',
                msg.author.displayAvatarURL(),
                msg
            );

            let command = this.commandService.getChatCommand(parsedMessage);
            if (command) {
                this.commandService.handleChatCommand(command, parsedMessage).then(result => this.handleResponse(result, msg))
            } else {
                this.router
                    .route(parsedMessage)
                    .then(result => this.handleResponse(result, msg));
            }
        });
    }

    async handleResponse(result: DiscordControllerResponse, msg)
    {
        if (result === null || result === undefined) {
            return;
        }

        if (result.removeOriginalMessage) {
            msg.delete(1).catch(reason => {
                console.error("Unable to delete message in server " + msg.guild.name + ", reason: " + reason);
            });
        }

        if (result.responseMessage) {
            result.messageDelay ? setTimeout(() => this.sendResponse(msg, result), result.messageDelay) : this.sendResponse(msg, result);
        }
    }

    async start(): Promise<void>
    {
        if (this.router == null) {
            throw "router cannot be null at app start";
        }

        return new Promise<void>((resolve, reject) => {
            this.discordClient.on("ready", async () => {
                await this.loadEmojiList();
                resolve();
            });

            this.discordClient
                .login(this.token)
                .then(() => {

                })
                .catch(reason => {
                    switch (reason.code) {
                        case 500:
                            console.error('Error while bringing the bot up: Network is offline, or discord API is down');
                            reject('Network is offline, or discord API is down')
                            return
                        case 'TOKEN_INVALID':
                            console.error('Error while bringing the bot up: Invalid DISCORD_BOT_TOKEN');
                            reject('Invalid DISCORD_BOT_TOKEN')
                            return
                        default:
                            console.error('Error while bringing the bot up: ' + reason);
                            reject(reason);
                            return
                    }
                })
        });
    }

    private sendResponse(msg: any, result: DiscordControllerResponse)
    {
        msg.channel
            .send(result.responseMessage)
            .then(message => {
                result.responseReactions.forEach((er) => {
                    let emoji = this.emojis.get(er);
                    message.react(emoji).catch(error => console.error(error))
                });

                if (result.reactionCollector) {
                    let collector = message.createReactionCollector((reaction, user) => user.id !== message.author.id, { time: result.reactionCollector.time });
                    collector.on("collect", ((reaction, user) => result.reactionCollector.lambda(reaction, user)));
                }


                if (result.messageLifeSpan !== null) {
                    message.delete({timeout: result.messageLifeSpan}).catch(reason => {
                        console.error("Unable to delete message in server " + msg.guild.name + ", reason: " + reason);
                    });
                }
            });
    }

    private async loadEmojiList()
    {
        this.discordClient.guilds.cache.each(guild => {
            guild.emojis.cache.each(emoji => {
                this.emojis.store(new EmojiReference(guild.id, emoji.name), emoji);
            });
        });
    }
}