import AbstractCommand from "./AbstractCommand";
import ICommand from "./ICommand";

export default class InitCommand extends AbstractCommand implements ICommand {
    name: string = 'init-project';

    async run(args: string[]) {
        let count = 0;
        this.discordClient.guilds.cache.each(async guild => {
            count++;
            console.log(guild.name);
        });

        console.log(count + " guilds total.");
    }
}