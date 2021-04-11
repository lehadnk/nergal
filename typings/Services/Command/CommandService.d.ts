import { ICommandsLoader } from "../../ConsoleCommands/ICommandsLoader";
export declare class CommandService {
    private commands;
    constructor(loader: ICommandsLoader);
    run(): Promise<void>;
}
