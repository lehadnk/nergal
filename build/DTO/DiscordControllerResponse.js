"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordControllerResponse = void 0;
class DiscordControllerResponse {
    constructor(responseMessage, messageLifeSpan = null, removeOriginalMessage = false, responseReactions = [], reactionCollector = null, messageDelay = null) {
        this.messageLifeSpan = null;
        this.responseMessage = responseMessage;
        this.messageLifeSpan = messageLifeSpan;
        this.removeOriginalMessage = removeOriginalMessage;
        this.responseReactions = responseReactions;
        this.reactionCollector = reactionCollector;
        this.messageDelay = messageDelay;
    }
}
exports.DiscordControllerResponse = DiscordControllerResponse;
//# sourceMappingURL=DiscordControllerResponse.js.map