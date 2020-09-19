import { Client } from 'discord.js';
import { IRouter } from "../../Routing/IRouter";
export declare class DiscordService {
    private readonly discordClient;
    private readonly token;
    private readonly adminIds;
    private router;
    private emojis;
    constructor(discordClient: Client, router: IRouter, token: string, adminIds: Map<string, null>);
    setRouter(router: IRouter): void;
    private setupHandlers;
    start(): Promise<boolean>;
    private loadEmojiList;
}
