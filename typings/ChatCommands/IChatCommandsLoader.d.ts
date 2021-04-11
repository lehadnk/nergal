import { IChatCommand } from "./IChatCommand";
export interface IChatCommandsLoader {
    load(): Map<string, IChatCommand>;
}
