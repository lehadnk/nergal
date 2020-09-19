import { ICommandsLoader } from "../../Commands/ICommandsLoader";
export declare class CommandService {
    private commands;
    constructor(loader: ICommandsLoader);
    run(): Promise<void>;
}
