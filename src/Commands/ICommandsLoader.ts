import ICommand from "./ICommand";

export default interface ICommandsLoader
{
    load(): Map<string, ICommand>
}