import {default as ICommand} from "./ICommand";
import AbstractCommand from "./AbstractCommand";
import {UsersDAO} from "../DAO/UsersDAO";

export default class ListUsers extends AbstractCommand implements ICommand {
    name: string = 'list-users';

    async run(args: string[]) {
        let dao = new UsersDAO(this.db);
        let users = await dao.getAll();
        users.forEach(user => {
            console.log(user.id + ': ' + user.name + '(' + user.discord_user_id + ')');
        });

        console.log(users.length + ' users total.');
    }
}