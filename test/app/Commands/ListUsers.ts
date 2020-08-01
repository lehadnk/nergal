import {default as ICommand} from "../../../src/Commands/ICommand";
import AbstractCommand from "../../../src/Commands/AbstractCommand";
import {UsersDAO} from "../../../src/DAO/UsersDAO";

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