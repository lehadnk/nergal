import { IChatCommand } from "../../ChatCommands/IChatCommand";
import { DiscordMessage } from "../../DTO/DiscordMessage";
import { DiscordControllerResponse } from "../../DTO/DiscordControllerResponse";
export declare class ChatCommandsService {
    private commands;
    constructor(commands: Map<string, IChatCommand>);
    getChatCommand(parsedMessage: DiscordMessage): IChatCommand;
    handleChatCommand(command: IChatCommand, parsedMessage: DiscordMessage): Promise<DiscordControllerResponse>;
}
