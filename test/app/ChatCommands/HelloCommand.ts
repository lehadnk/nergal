import {AbstractChatCommand} from "../../../src/ChatCommands/AbstractChatCommand";
import {IChatCommand} from "../../../src/ChatCommands/IChatCommand";
import {DiscordControllerResponse, DiscordMessage} from "../../../src";

export default class HelloCommand extends AbstractChatCommand implements IChatCommand {
    command: string = '!hello';

    public async handle(message: DiscordMessage, args: string[]): Promise<DiscordControllerResponse>
    {
        return new DiscordControllerResponse("Hello, " + message.authorName + "!");
    }
}