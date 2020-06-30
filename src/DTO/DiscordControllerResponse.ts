import {DiscordMessage} from "./DiscordMessage";

export class DiscordControllerResponse {
    public responseMessage: string;
    public syncMessageData: DiscordMessage;
    public removeOriginalMessage: boolean;

    constructor(responseMessage?: string, syncMessageData?: DiscordMessage, removeOriginalMessage: boolean = true) {
        this.responseMessage = responseMessage;
        this.syncMessageData = syncMessageData;
        this.removeOriginalMessage = removeOriginalMessage;
    }
}