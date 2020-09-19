import {AbstractDAO} from "./AbstractDAO";
import {User} from "../Models/User";

export class UsersDAO extends AbstractDAO<User> {
    table: string = 'users';

    fields: string[] = ['id', 'name', 'discord_user_id'];
}