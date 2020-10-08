import { Client } from "discord.js";
export default class MessagingService {
    private discordClient;
    constructor(discordClient: Client);
    sendDM(discord_user_id: string, msg: any): Promise<void>;
    sendToChannel(discord_channel_id: string, msg: any): Promise<void>;
}
