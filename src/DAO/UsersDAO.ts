import AbstractDAO from "./AbstractDAO";
import User from "../Models/User";

export class UsersDAO extends AbstractDAO<User> {
    table: string = 'users';

    fields: string[] = ['id', 'name', 'discord_user_id'];

    public async getAll(): Promise<User[]>
    {
        let data = await this.db.all("SELECT * FROM users");
        return data.map((row) => {
            let model = new User();
            model.discord_user_id = row.discord_user_id;
            model.name = row.name;
            model.id = row.id;
            return model;
        })
    }
}