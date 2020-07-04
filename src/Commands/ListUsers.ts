import {default as ICommand} from "./ICommand";
import AbstractCommand from "./AbstractCommand";

export default class ListUsers extends AbstractCommand implements ICommand {
    name: string = 'list-users';

    async run(args: string[]) {
        let count = 0;
        this.db.all("SELECT * FROM users").then(rows => {
            rows.forEach((r) => {
                count++;
                console.log(r.id + ': ' + r.name + '(' + r.discord_user_id + ')');
            });
        });

        console.log(count + ' users total.');
    }
}