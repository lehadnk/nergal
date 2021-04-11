import {DiscordMessage} from "nergal";
import {DiscordControllerResponse} from "nergal";
import {AbstractChatCommand} from "nergal";
import {IChatCommand} from "nergal";

export default class HelloCommand extends AbstractChatCommand implements IChatCommand {
    command: string = '!hello';

    public handle(message: DiscordMessage, args: string[]): DiscordControllerResponse
    {
        return new DiscordControllerResponse("Hello, " + message.authorName + "!");
    }
}