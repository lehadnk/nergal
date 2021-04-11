import {ICommandsLoader} from 'nergal';
import {ICommand} from 'nergal';
import * as commands from './index';
import AppServiceContainer from "../AppServiceContainer";

export default class AppCommandsLoader implements ICommandsLoader
{
    load(): Map<string, ICommand> {
        let result = new Map<string, ICommand>();
        for (let commandsKey in commands) {
            let object = new commands[commandsKey];
            object.discordClient = AppServiceContainer.discordClient;
            object.db = AppServiceContainer.db;
            result.set(object.name, object);
        }

        return result;
    }
}