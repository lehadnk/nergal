import EmojiReference from "./EmojiReference";
import ReactionCollector from "./ReactionCollector";

export class DiscordControllerResponse {
    public responseMessage: string;
    public removeOriginalMessage: boolean;
    public responseReactions: EmojiReference[];
    public reactionCollector: ReactionCollector;

    constructor(
        responseMessage?: string,
        removeOriginalMessage: boolean = true,
        responseReactions: EmojiReference[] = [],
        reactionCollector: ReactionCollector = null
    ) {
        this.responseMessage = responseMessage;
        this.removeOriginalMessage = removeOriginalMessage;
        this.responseReactions = responseReactions;
        this.reactionCollector = reactionCollector;
    }
}