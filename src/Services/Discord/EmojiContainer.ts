import {GuildEmoji} from "discord.js";
import EmojiReference from "../../DTO/EmojiReference";

export default class EmojiContainer {
    private emojis: Map<string, GuildEmoji> = new Map<string, GuildEmoji>();

    store(reference: EmojiReference, emoji: GuildEmoji)
    {
        this.emojis.set(JSON.stringify(reference), emoji);
    }

    get(reference: EmojiReference): GuildEmoji
    {
        return this.emojis.get(JSON.stringify(reference));
    }
}