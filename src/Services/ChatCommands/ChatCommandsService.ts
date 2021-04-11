import {IChatCommand} from "../../ChatCommands/IChatCommand";
import {DiscordMessage} from "../../DTO/DiscordMessage";
import {DiscordControllerResponse} from "../../DTO/DiscordControllerResponse";

export class ChatCommandsService {
    private commands: Map<string, IChatCommand>

    constructor(commands: Map<string, IChatCommand>) {
        this.commands = commands;
    }

    public getChatCommand(parsedMessage: DiscordMessage): IChatCommand
    {
        let chunks = parsedMessage.message.split(' ');
        if (chunks.length < 0) {
            return null;
        }

        let command = chunks[0]
        return this.commands.get(command);
    }

    async handleChatCommand(command: IChatCommand, parsedMessage: DiscordMessage): Promise<DiscordControllerResponse>
    {
        let chunks = parsedMessage.message.split(' ');
        let args = chunks.splice(1);
        return command.handle(parsedMessage, args);
    }
}