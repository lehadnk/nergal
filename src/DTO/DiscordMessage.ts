export class DiscordMessage {
    public readonly authorId: string;
    public readonly authorTag: number;
    public readonly serverId: string;
    public readonly channelId: string;
    public readonly authorName: string;
    public readonly message: string;
    public readonly embedImageUrl: string[];
    public readonly isAdmin: boolean;
    public readonly isPrivate: boolean;
    public readonly authorAvatarUrl: string;

    constructor(
        authorId: string,
        authorTag: number,
        authorName: string,
        serverId: string,
        channelId: string,
        message: string,
        embedImageUrl: string[],
        isAdmin: boolean,
        isPrivate: boolean,
        authorAvatarUrl: string,
    ) {
        this.authorId = authorId;
        this.authorTag = authorTag;
        this.authorName = authorName;
        this.serverId = serverId;
        this.channelId = channelId;
        this.message = message;
        this.embedImageUrl = embedImageUrl;
        this.isAdmin = isAdmin;
        this.isPrivate = isPrivate;
        this.authorAvatarUrl = authorAvatarUrl;
    }
}