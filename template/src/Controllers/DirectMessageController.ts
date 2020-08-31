import {DiscordMessage} from "nergal/src/DTO/DiscordMessage";
import {DiscordControllerResponse} from "nergal/src/DTO/DiscordControllerResponse";

export default class DirectMessageController {
    async dispatch(msg: DiscordMessage): Promise<DiscordControllerResponse> {
        return new DiscordControllerResponse("Hello!");
    }
}