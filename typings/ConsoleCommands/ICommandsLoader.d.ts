import { ICommand } from "./ICommand";
export interface ICommandsLoader {
    load(): Map<string, ICommand>;
}
