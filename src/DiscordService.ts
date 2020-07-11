import {Client} from 'discord.js';
import {BaseController} from "./Controllers/BaseController";
import {getMsgAuthorName} from "./Helpers/ChatMessageHelpers";
import {DiscordMessage} from "./DTO/DiscordMessage";
import Router from "./Routing/Router";

export class DiscordService {
    private readonly discordClient;
    private readonly token: string;
    private readonly messageLifeTime: number;
    private readonly adminIds: Map<string, null>;

    constructor(discordClient: Client, token: string, adminIds: Map<string, null>) {
        this.discordClient = discordClient;
        this.token = token;
        this.adminIds = adminIds;

        // It's not injectable, since DiscordService logic is highly couped with BaseController
        this.messageLifeTime = process.env.MESSAGE_LIFE_SPAN != undefined ? parseInt(process.env.MESSAGE_LIFE_SPAN) : 10000;
        this.setupHandlers();
    }

    private setupHandlers() {
        this.discordClient.on("message", msg => {
            let imageUrls: string[] = [];
            msg.attachments.forEach(attachment => {
                if (attachment.url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
                    imageUrls.push(attachment.url);
                }
            });

            let parsedMessage = new DiscordMessage(
                msg.author.id,
                getMsgAuthorName(msg),
                msg.guild !== null ? msg.guild.id : null,
                msg.channel.id,
                msg.content,
                imageUrls,
                this.adminIds.has(msg.author.id),
                msg.channel.type === 'dm'
            );

            let router = new Router();
            let controllerResponse = router.route(parsedMessage);
        });
    }

    start() {
        this.discordClient
            .login(this.token)
            .then(() => {
                console.info('Bot is up!');
            })
    }
}