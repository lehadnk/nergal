import ICommandsLoader from 'nergal/src/Commands/ICommandsLoader';
import ICommand from 'nergal/src/Commands/ICommand';
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