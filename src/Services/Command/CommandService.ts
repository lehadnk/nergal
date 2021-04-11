import {ICommandsLoader} from "../../ConsoleCommands/ICommandsLoader";
import {ICommand} from "../../ConsoleCommands/ICommand";

export class CommandService {
    private commands: Map<string, ICommand>;

    constructor(loader: ICommandsLoader) {
        this.commands = loader.load();
    }

    public async run() {
        if (process.argv.length < 3) {
            console.error("Please specify the command: npm run console <command>");
            process.exit(0);
        }

        let command = process.argv[2];
        let args = process.argv.splice(3);

        let handler = this.commands.get(command);
        if (!handler) {
            console.error("No such command: " + command);
            process.exit(1);
        }

        await handler.run(args)
            .then(() => process.exit(0))
            .catch(error => {
                console.error(error);
                process.exit(1);
            });
    }
}