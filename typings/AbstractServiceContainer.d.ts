import { IDbAdapter } from "./Services/Db/IDbAdapter";
import { Client } from 'discord.js';
import { DiscordService } from "./Services/Discord/DiscordService";
import { IRouter } from "./Routing/IRouter";
import MessagingService from "./Services/Discord/MessagingService";
export declare abstract class AbstractServiceContainer {
    static db: IDbAdapter;
    static discordClient: Client;
    static discordService: DiscordService;
    static messagingService: MessagingService;
    protected static router: IRouter;
    static init(): void;
    static start(): Promise<void>;
    static updateRouter(): void;
}
