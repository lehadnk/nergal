import {ICommand} from "../../../src/Commands/ICommand";
import {AbstractCommand} from "../../../src/Commands/AbstractCommand";
import TestServiceContainer from "../TestServiceContainer";

export default class ListGuilds extends AbstractCommand implements ICommand {
    name: string = 'send-message';

    async run(args: string[]) {
        if (args.length < 3) {
            console.error("Please use following syntax: send-message <type> <id> <text>");
            return;
        }
        let type = args[0];
        let id = args[1];
        let msg = args[2];

        switch (type) {
            case "dm":
                await this.sendDm(id, msg);
                return;
            case "channel":
                await this.sendToChannel(id, msg);
                return;
            default:
                console.error("Type argument could have next values: dm");
                return;
        }
    }

    private async sendDm(id: string, msg: string) {
        await TestServiceContainer.messagingService.sendDM(id, msg);
    }

    private async sendToChannel(channel_id: string, msg: string)
    {
        await TestServiceContainer.messagingService.sendToChannel(channel_id, msg);
    }
}