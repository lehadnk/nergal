import { Message } from "discord.js";
export declare class DiscordMessage {
    readonly authorId: string;
    readonly authorTag: number;
    readonly serverId: string;
    readonly serverName: string;
    readonly channelId: string;
    readonly channelName: string;
    readonly authorName: string;
    readonly message: string;
    readonly embedImageUrl: string[];
    readonly isAdmin: boolean;
    readonly isPrivate: boolean;
    readonly authorAvatarUrl: string;
    readonly object: Message;
    constructor(authorId: string, authorTag: number, authorName: string, serverId: string, serverName: string, channelId: string, channelName: string, message: string, embedImageUrl: string[], isAdmin: boolean, isPrivate: boolean, authorAvatarUrl: string, object: Message);
}
