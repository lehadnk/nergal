import {default as ICommand} from "nergal/src/Commands/ICommand";
import AbstractCommand from "nergal/src/Commands/AbstractCommand";
import AppServiceContainer from "../AppServiceContainer";

export default class ListGuilds extends AbstractCommand implements ICommand {
    name: string = 'list-guilds';

    async run(args: string[]) {
        let count = 0;
        AppServiceContainer.discordClient.guilds.cache.each(async guild => {
            count++;
            console.log(guild.name);
        });

        console.log(count + " guilds total.");
    }
}