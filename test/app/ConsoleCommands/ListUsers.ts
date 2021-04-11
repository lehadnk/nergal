import {ICommand} from "../../../src/ConsoleCommands/ICommand";
import {AbstractCommand} from "../../../src/ConsoleCommands/AbstractCommand";
import {UsersDAO} from "../../../src/DAO/UsersDAO";
import {User} from "../../../src/Models/User";

export default class ListUsers extends AbstractCommand implements ICommand {
    name: string = 'list-users';

    async run(args: string[]) {
        let dao = new UsersDAO(this.db, () => new User());
        let users = await dao.getAll();
        users.forEach(user => {
            console.log(user.id + ': ' + user.name + ' (' + user.discord_user_id + ')');
        });

        console.log(users.length + ' users total.');
    }
}