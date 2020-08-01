import {DiscordMessage} from "./DiscordMessage";

export class DiscordControllerResponse {
    public responseMessage: string;
    public removeOriginalMessage: boolean;

    constructor(responseMessage?: string, removeOriginalMessage: boolean = true) {
        this.responseMessage = responseMessage;
        this.removeOriginalMessage = removeOriginalMessage;
    }
}