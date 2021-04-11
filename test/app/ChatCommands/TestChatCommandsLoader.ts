import * as commands from './index';
import {IChatCommand} from '../../../src/ChatCommands/IChatCommand';
import TestServiceContainer from "../TestServiceContainer";
import {IChatCommandsLoader} from "../../../src/ChatCommands/IChatCommandsLoader";

export default class TestChatCommandsLoader implements IChatCommandsLoader
{
    load(): Map<string, IChatCommand> {
        let result = new Map<string, IChatCommand>();
        for (let commandsKey in commands) {
            let object = new commands[commandsKey];
            object.discordClient = TestServiceContainer.discordClient;
            object.db = TestServiceContainer.db;
            result.set(object.command, object);
        }

        return result;
    }
}