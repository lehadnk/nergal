"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MessagingService {
    constructor(discordClient) {
        this.discordClient = discordClient;
    }
    async sendDM(discord_user_id, msg) {
        await this.discordClient.users.fetch(discord_user_id).then(async (u) => {
            await u.send(msg);
        });
    }
    async sendToChannel(discord_channel_id, msg) {
        await this.discordClient.channels.fetch(discord_channel_id).then(async (с) => {
            await с.send(msg);
        });
    }
}
exports.default = MessagingService;
//# sourceMappingURL=MessagingService.js.map