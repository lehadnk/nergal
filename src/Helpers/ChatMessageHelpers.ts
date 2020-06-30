export function getMsgAuthorName(msg): string {
    if (msg.member === 'undefined' || msg.member === null) {
        return msg.author.username;
    }

    return msg.member.displayName;
}