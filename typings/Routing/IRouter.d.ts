import { DiscordMessage } from "../DTO/DiscordMessage";
import { DiscordControllerResponse } from "../DTO/DiscordControllerResponse";
export interface IRouter {
    route(msg: DiscordMessage): Promise<DiscordControllerResponse>;
}
