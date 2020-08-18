export default class EmojiReference {
    guild_id: string;
    name: string;

    constructor(guild_id: string, name: string)
    {
        this.guild_id = guild_id;
        this.name = name;
    }
}