import { default as ICommand } from "../../../src/Commands/ICommand";
import AbstractCommand from "../../../src/Commands/AbstractCommand";
export default class ListGuilds extends AbstractCommand implements ICommand {
    name: string;
    run(args: string[]): Promise<void>;
}
