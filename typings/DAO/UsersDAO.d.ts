import { AbstractDAO } from "./AbstractDAO";
import { User } from "../Models/User";
export declare class UsersDAO extends AbstractDAO<User> {
    table: string;
    fields: string[];
}
