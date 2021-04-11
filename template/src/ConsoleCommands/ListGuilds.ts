import {ICommand} from "nergal";
import {AbstractCommand} from "nergal";
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