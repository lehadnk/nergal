import AbstractModel from "../DAO/AbstractModel";

export default class User extends AbstractModel{
    name: string;
    discord_user_id: string;
    id: number;
}