import { Client } from 'discord.js';
import { IRouter } from "../../Routing/IRouter";
import { DiscordControllerResponse } from "../..";
import { ChatCommandsService } from "../ChatCommands/ChatCommandsService";
export declare class DiscordService {
    private readonly discordClient;
    private readonly token;
    private readonly adminIds;
    private router;
    private emojis;
    private readonly commands;
    private readonly commandService;
    constructor(discordClient: Client, router: IRouter, token: string, adminIds: Map<string, null>, chatCommandsService: ChatCommandsService);
    setRouter(router: IRouter): void;
    private setupHandlers;
    handleResponse(result: DiscordControllerResponse, msg: any): Promise<void>;
    start(): Promise<void>;
    private sendResponse;
    private loadEmojiList;
}
