"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordService = void 0;
const ChatMessageHelpers_1 = require("../../Helpers/ChatMessageHelpers");
const DiscordMessage_1 = require("../../DTO/DiscordMessage");
const EmojiReference_1 = require("../../DTO/EmojiReference");
const EmojiContainer_1 = require("./EmojiContainer");
class DiscordService {
    constructor(discordClient, router, token, adminIds) {
        this.emojis = new EmojiContainer_1.EmojiContainer();
        this.discordClient = discordClient;
        this.router = router;
        this.token = token;
        this.adminIds = adminIds;
        this.setupHandlers();
    }
    setRouter(router) {
        this.router = router;
    }
    setupHandlers() {
        this.discordClient.on("message", msg => {
            if (msg.author.bot) {
                return;
            }
            let imageUrls = [];
            msg.attachments.forEach(attachment => {
                if (attachment.url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
                    imageUrls.push(attachment.url);
                }
            });
            let parsedMessage = new DiscordMessage_1.DiscordMessage(msg.author.id, msg.author.discriminator, ChatMessageHelpers_1.getMsgAuthorName(msg), msg.guild !== null ? msg.guild.id : null, msg.guild !== null ? msg.guild.name : 'dm', msg.channel.id, msg.channel.name, msg.content, imageUrls, this.adminIds.has(msg.author.id), msg.channel.type === 'dm', msg.author.displayAvatarURL());
            this.router
                .route(parsedMessage)
                .then(result => {
                if (result === null) {
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
            });
        });
    }
    async start() {
        if (this.router == null) {
            throw "router cannot be null at app start";
        }
        return new Promise((resolve, reject) => {
            this.discordClient.on("ready", async () => {
                await this.loadEmojiList();
                resolve(true);
            });
            this.discordClient
                .login(this.token)
                .then(() => {
            })
                .catch(reason => {
                console.error('Error while bringing the bot up: ' + reason);
                reject(reason);
            });
        });
    }
    sendResponse(msg, result) {
        msg.channel
            .send(result.responseMessage)
            .then(message => {
            result.responseReactions.forEach((er) => {
                let emoji = this.emojis.get(er);
                message.react(emoji).catch(error => console.error(error));
            });
            if (result.reactionCollector) {
                let collector = message.createReactionCollector((reaction, user) => user.id !== message.author.id, { time: result.reactionCollector.time });
                collector.on("collect", ((reaction, user) => result.reactionCollector.lambda(reaction, user)));
            }
            if (result.messageLifeSpan !== null) {
                message.delete({ timeout: result.messageLifeSpan }).catch(reason => {
                    console.error("Unable to delete message in server " + msg.guild.name + ", reason: " + reason);
                });
            }
        });
    }
    async loadEmojiList() {
        this.discordClient.guilds.cache.each(guild => {
            guild.emojis.cache.each(emoji => {
                this.emojis.store(new EmojiReference_1.EmojiReference(guild.id, emoji.name), emoji);
            });
        });
    }
}
exports.DiscordService = DiscordService;
//# sourceMappingURL=DiscordService.js.map