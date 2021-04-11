import {Client} from "discord.js";
import {IDbAdapter} from "../Services/Db/IDbAdapter";
import {DiscordMessage} from "../DTO/DiscordMessage";
import {DiscordControllerResponse} from "../DTO/DiscordControllerResponse";

export abstract class AbstractChatCommand {
    public discordClient: Client;
    public db: IDbAdapter;

    public abstract handle(message: DiscordMessage, args: string[]): Promise<DiscordControllerResponse>
}