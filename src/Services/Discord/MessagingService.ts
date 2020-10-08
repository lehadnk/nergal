import {Client, TextChannel} from "discord.js";

export default class MessagingService {
    private discordClient: Client;

    constructor(discordClient: Client) {
        this.discordClient = discordClient;
    }

    public async sendDM(discord_user_id: string, msg: any)
    {
        await this.discordClient.users.fetch(discord_user_id).then(async u => {
            await u.send(msg);
        });
    }

    public async sendToChannel(discord_channel_id: string, msg: any)
    {
        await this.discordClient.channels.fetch(discord_channel_id).then(async (с: TextChannel) => {
            await с.send(msg);
        });
    }
}