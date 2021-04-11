import {DiscordMessage} from "../DTO/DiscordMessage";
import {DiscordControllerResponse} from "../DTO/DiscordControllerResponse";

export interface IChatCommand {
    command: string;

    handle(message: DiscordMessage, args: string[]): Promise<DiscordControllerResponse>
}