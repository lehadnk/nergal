import {EmojiReference} from "./EmojiReference";
import {ReactionCollector} from "./ReactionCollector";

export class DiscordControllerResponse {
    public readonly responseMessage: string;
    public readonly removeOriginalMessage: boolean;
    public readonly responseReactions: EmojiReference[];
    public readonly reactionCollector: ReactionCollector;
    public readonly messageLifeSpan: number = null;

    constructor(
        responseMessage?: string,
        messageLifeSpan: number = null,
        removeOriginalMessage: boolean = false,
        responseReactions: EmojiReference[] = [],
        reactionCollector: ReactionCollector = null,
    ) {
        this.responseMessage = responseMessage;
        this.messageLifeSpan = messageLifeSpan;
        this.removeOriginalMessage = removeOriginalMessage;
        this.responseReactions = responseReactions;
        this.reactionCollector = reactionCollector;
    }
}