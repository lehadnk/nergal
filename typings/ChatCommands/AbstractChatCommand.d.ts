import { Client } from "discord.js";
import { IDbAdapter } from "../Services/Db/IDbAdapter";
import { DiscordMessage } from "../DTO/DiscordMessage";
import { DiscordControllerResponse } from "../DTO/DiscordControllerResponse";
export declare abstract class AbstractChatCommand {
    discordClient: Client;
    db: IDbAdapter;
    abstract handle(message: DiscordMessage, args: string[]): Promise<DiscordControllerResponse>;
}
