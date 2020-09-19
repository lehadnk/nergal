import { Client } from "discord.js";
export default interface ICommand {
    name: string;
    discordClient: Client;
    run(args: string[]): any;
}
