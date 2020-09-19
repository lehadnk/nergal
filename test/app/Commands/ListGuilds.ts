import {ICommand} from "../../../src/Commands/ICommand";
import {AbstractCommand} from "../../../src/Commands/AbstractCommand";

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