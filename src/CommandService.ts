import * as commands from "./Commands";
import {Client} from "discord.js";
import {ICommand} from "./Commands";
import {IDbAdapter} from "./IDbAdapter";

export class CommandService {

    private commands: Map<string, ICommand>;

    constructor(discordClient: Client, db: IDbAdapter) {
        this.commands = new Map<string, ICommand>();
        for (let commandsKey in commands) {
            let object = new commands[commandsKey];
            object.discordClient = discordClient;
            object.db = db;
            this.commands.set(object.name, object);
        }
    }

    public run(command: string, args: string[]) {
        let handler = this.commands.get(command);
        if (!handler) {
            console.error("No such command: " + command);
            return;
        }

        handler.run(args);
    }
}