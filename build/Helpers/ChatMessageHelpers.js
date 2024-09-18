"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMsgAuthorName = getMsgAuthorName;
function getMsgAuthorName(msg) {
    if (msg.member === 'undefined' || msg.member === null) {
        return msg.author.username;
    }
    return msg.member.displayName;
}
//# sourceMappingURL=ChatMessageHelpers.js.map