import { GuildEmoji } from "discord.js";
import { EmojiReference } from "../../DTO/EmojiReference";
export declare class EmojiContainer {
    private emojis;
    store(reference: EmojiReference, emoji: GuildEmoji): void;
    get(reference: EmojiReference): GuildEmoji;
}
