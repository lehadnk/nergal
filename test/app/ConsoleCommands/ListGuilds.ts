import {ICommand} from "../../../src/ConsoleCommands/ICommand";
import {AbstractCommand} from "../../../src/ConsoleCommands/AbstractCommand";

export default class ListGuilds extends AbstractCommand implements ICommand {
    name: string = 'list-guilds';

    async run(args: string[]) {
        let count = 0;
        this.discordClient.guilds.cache.each(async guild => {
            count++;
            console.log(guild.name);
        });

        console.log(count + " guilds total.");
    }
}