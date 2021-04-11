import {DiscordMessage} from "nergal";
import {DiscordControllerResponse} from "nergal";
import {AbstractChatCommand} from "nergal";
import {IChatCommand} from "nergal";

export default class HelloCommand extends AbstractChatCommand implements IChatCommand {
    command: string = '!hello';

    public async handle(message: DiscordMessage, args: string[]): Promise<DiscordControllerResponse>
    {
        return new DiscordControllerResponse("Hello, " + message.authorName + "!");
    }
}