import AbstractModel from "./AbstractModel";

export default class User extends AbstractModel {
    name: string;
    discord_user_id: string;
    id: number;
}