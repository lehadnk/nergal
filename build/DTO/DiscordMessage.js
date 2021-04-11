"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordMessage = void 0;
class DiscordMessage {
    constructor(authorId, authorTag, authorName, serverId, serverName, channelId, channelName, message, embedImageUrl, isAdmin, isPrivate, authorAvatarUrl, object) {
        this.authorId = authorId;
        this.authorTag = authorTag;
        this.authorName = authorName;
        this.serverId = serverId;
        this.serverName = serverName;
        this.channelId = channelId;
        this.channelName = channelName;
        this.message = message;
        this.embedImageUrl = embedImageUrl;
        this.isAdmin = isAdmin;
        this.isPrivate = isPrivate;
        this.authorAvatarUrl = authorAvatarUrl;
        this.object = object;
    }
}
exports.DiscordMessage = DiscordMessage;
//# sourceMappingURL=DiscordMessage.js.map