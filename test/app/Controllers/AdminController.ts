import {DiscordMessage} from "../../../src/DTO/DiscordMessage";
import {DiscordControllerResponse} from "../../../src/DTO/DiscordControllerResponse";

export class AdminController {
    dispatch(msg: DiscordMessage): Promise<DiscordControllerResponse> {
        console.log("Handling admin message " + msg.message);

        // Spam message - we're just clearing it
        return new Promise<DiscordControllerResponse>((resolve) => {
            resolve(new DiscordControllerResponse("Hello!"));
        });
    }
}