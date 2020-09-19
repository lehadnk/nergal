import ICommand from '../../../src/Commands/ICommand';
import ICommandsLoader from "../../../src/Commands/ICommandsLoader";
export default class TestCommandsLoader implements ICommandsLoader {
    load(): Map<string, ICommand>;
}
