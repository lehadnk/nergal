"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatCommandsService = void 0;
class ChatCommandsService {
    constructor(commands) {
        this.commands = commands;
    }
    getChatCommand(parsedMessage) {
        let chunks = parsedMessage.message.split(' ');
        if (chunks.length < 0) {
            return null;
        }
        let command = chunks[0];
        return this.commands.get(command);
    }
    async handleChatCommand(command, parsedMessage) {
        let chunks = parsedMessage.message.split(' ');
        let args = chunks.splice(1);
        return command.handle(parsedMessage, args);
    }
}
exports.ChatCommandsService = ChatCommandsService;
//# sourceMappingURL=ChatCommandsService.js.map