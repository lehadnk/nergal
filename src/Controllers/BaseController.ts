import {DiscordMessage} from "../DTO/DiscordMessage";
import {DiscordControllerResponse} from "../DTO/DiscordControllerResponse";

export class BaseController {
    constructor() {
    }

    dispatch(msg: DiscordMessage): Promise<DiscordControllerResponse> {
        console.log("Handling user message in the channel " + msg.channelId);

        // Spam message - we're just clearing it
        return new Promise<DiscordControllerResponse>((resolve) => {
            resolve(new DiscordControllerResponse("Pong!", false));
        });
    }
}