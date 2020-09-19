export default class ReactionCollector {
    time: number;
    lambda: (reaction: any, user: any) => void;
}
