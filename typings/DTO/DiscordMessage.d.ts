export declare class DiscordMessage {
    readonly authorId: string;
    readonly authorTag: number;
    readonly serverId: string;
    readonly channelId: string;
    readonly authorName: string;
    readonly message: string;
    readonly embedImageUrl: string[];
    readonly isAdmin: boolean;
    readonly isPrivate: boolean;
    readonly authorAvatarUrl: string;
    constructor(authorId: string, authorTag: number, authorName: string, serverId: string, channelId: string, message: string, embedImageUrl: string[], isAdmin: boolean, isPrivate: boolean, authorAvatarUrl: string);
}
