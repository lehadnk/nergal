import {ICommand} from "../../test/app/Commands";

export default interface ICommandsLoader
{
    load(): Map<string, ICommand>
}