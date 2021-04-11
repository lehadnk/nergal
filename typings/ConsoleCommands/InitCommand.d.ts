import { AbstractCommand } from "./AbstractCommand";
import { ICommand } from "./ICommand";
export declare class InitCommand extends AbstractCommand implements ICommand {
    name: string;
    run(args: string[]): Promise<void>;
}
