import {Message} from "discord.js";

export class DiscordMessage {
    public readonly authorId: string;
    public readonly authorTag: number;
    public readonly serverId: string;
    public readonly serverName: string;
    public readonly channelId: string;
    public readonly channelName: string;
    public readonly authorName: string;
    public readonly message: string;
    public readonly embedImageUrl: string[];
    public readonly isAdmin: boolean;
    public readonly isPrivate: boolean;
    public readonly authorAvatarUrl: string;
    public readonly object: Message;

    constructor(
        authorId: string,
        authorTag: number,
        authorName: string,
        serverId: string,
        serverName: string,
        channelId: string,
        channelName: string,
        message: string,
        embedImageUrl: string[],
        isAdmin: boolean,
        isPrivate: boolean,
        authorAvatarUrl: string,
        object: Message
    ) {
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