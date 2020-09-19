import { DiscordMessage } from "../DTO/DiscordMessage";
import { DiscordControllerResponse } from "../DTO/DiscordControllerResponse";
export default interface IRouter {
    route(msg: DiscordMessage): Promise<DiscordControllerResponse>;
}
