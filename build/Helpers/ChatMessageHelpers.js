"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMsgAuthorName = void 0;
function getMsgAuthorName(msg) {
    if (msg.member === 'undefined' || msg.member === null) {
        return msg.author.username;
    }
    return msg.member.displayName;
}
exports.getMsgAuthorName = getMsgAuthorName;
//# sourceMappingURL=ChatMessageHelpers.js.map