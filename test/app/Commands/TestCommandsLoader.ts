import * as commands from './index';
import ICommand from '../../../src/Commands/ICommand';
import TestServiceContainer from "../TestServiceContainer";
import ICommandsLoader from "../../../src/Commands/ICommandsLoader";

export default class TestCommandsLoader implements ICommandsLoader
{
    load(): Map<string, ICommand> {
        let result = new Map<string, ICommand>();
        for (let commandsKey in commands) {
            let object = new commands[commandsKey];
            object.discordClient = TestServiceContainer.discordClient;
            object.db = TestServiceContainer.db;
            result.set(object.name, object);
        }

        return result;
    }
}