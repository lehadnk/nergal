import {Client} from "discord.js";

export interface ICommand {
    name: string;
    discordClient: Client;

    run(args: string[]);
}