"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmojiContainer = void 0;
class EmojiContainer {
    constructor() {
        this.emojis = new Map();
    }
    store(reference, emoji) {
        this.emojis.set(JSON.stringify(reference), emoji);
    }
    get(reference) {
        return this.emojis.get(JSON.stringify(reference));
    }
}
exports.EmojiContainer = EmojiContainer;
//# sourceMappingURL=EmojiContainer.js.map