import { EmojiReference } from "./EmojiReference";
import { ReactionCollector } from "./ReactionCollector";
export declare class DiscordControllerResponse {
    readonly responseMessage: string;
    readonly removeOriginalMessage: boolean;
    readonly responseReactions: EmojiReference[];
    readonly reactionCollector: ReactionCollector;
    readonly messageLifeSpan: number;
    readonly messageDelay: number;
    constructor(responseMessage?: string, messageLifeSpan?: number, removeOriginalMessage?: boolean, responseReactions?: EmojiReference[], reactionCollector?: ReactionCollector, messageDelay?: number);
}
