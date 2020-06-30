import {DiscordMessage} from "../DTO/DiscordMessage";
import {DiscordControllerResponse} from "../DTO/DiscordControllerResponse";

export class DiscordController {
    constructor(adminIds: string[]) {
    }

    dispatch(msg: DiscordMessage): Promise<DiscordControllerResponse> {
        console.log("Handling message in the channel " + msg.channelId);
        // Spam message - we're just clearing it
        return new Promise<DiscordControllerResponse>((resolve) => {
            resolve(new DiscordControllerResponse(null, null, true));
        });
    }

    private handleAnnounceRequest(msg: DiscordMessage): Promise<DiscordControllerResponse> {
        return new Promise<DiscordControllerResponse>((resolve) => {
            resolve(new DiscordControllerResponse(null, msg, false));
        });
    }
}