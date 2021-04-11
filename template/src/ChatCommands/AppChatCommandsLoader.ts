import {IChatCommandsLoader} from 'nergal';
import {IChatCommand} from 'nergal';
import * as commands from './index';
import AppServiceContainer from "../AppServiceContainer";

export default class AppChatCommandsLoader implements IChatCommandsLoader
{
    load(): Map<string, IChatCommand> {
        let result = new Map<string, IChatCommand>();
        for (let commandsKey in commands) {
            let object = new commands[commandsKey];
            object.discordClient = AppServiceContainer.discordClient;
            object.db = AppServiceContainer.db;
            result.set(object.command, object);
        }

        return result;
    }
}