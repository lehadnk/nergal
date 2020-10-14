import {DiscordMessage} from "nergal";
import {DiscordControllerResponse} from "nergal";

export default class DirectMessageController {
    async dispatch(msg: DiscordMessage): Promise<DiscordControllerResponse> {
        return new DiscordControllerResponse("Hello!");
    }
}