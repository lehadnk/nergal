import { Database } from "sqlite3";
import IDbAdapter from "./IDbAdapter";
export declare class SqliteDbAdapter implements IDbAdapter {
    private db;
    constructor(dbConnection: Database);
    value(sql: string, placeholders?: object): Promise<string>;
    one(sql: string, placeholders?: object): Promise<any>;
    all(sql: string, placeholders?: object): Promise<any[]>;
    run(sql: string, placeholders?: object): Promise<void>;
}
