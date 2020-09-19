export class ReactionCollector
{
    time: number;
    lambda: (reaction, user) => void;
}