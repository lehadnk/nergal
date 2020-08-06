import * as commands from "./Commands";
import {Client} from "discord.js";
import {ICommand} from "./Commands";
import {IDbAdapter} from "./IDbAdapter";
import AbstractServiceContainer from "./AbstractServiceContainer";

export class CommandService {

    private commands: Map<string, ICommand>;

    constructor() {
        this.commands = new Map<string, ICommand>();
        for (let commandsKey in commands) {
            let object = new commands[commandsKey];
            object.discordClient = AbstractServiceContainer.discordClient;
            object.db = AbstractServiceContainer.db;
            this.commands.set(object.name, object);
        }
    }

    public async run() {
        if (process.argv.length < 3) {
            console.error("Please specify the command: npm run console <command>");
            process.exit(0);
        }

        let command = process.argv[2];
        let args = process.argv.splice(0, 3);


        let handler = this.commands.get(command);
        if (!handler) {
            console.error("No such command: " + command);
            process.exit(1);
        }

        AbstractServiceContainer.discordClient.on('ready', async () => {
            console.log('test');
            await handler.run(args);
            process.exit(0);
        });

        AbstractServiceContainer.discordClient.login(process.env.DISCORD_BOT_TOKEN)
            .catch(r => {
                console.error("Unable to connect to discord: " + r);
                process.exit(1);
            });
    }
}