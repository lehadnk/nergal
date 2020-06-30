import {Database} from "sqlite3";
import {IDbAdapter} from "./IDbAdapter";
import {DatabaseError, DatabaseErrorCode} from "./Exceptions/DatabaseError";

export class SqliteDbAdapter implements IDbAdapter {

    private db: Database;

    constructor(dbConnection: Database) {
        this.db = dbConnection;
    }

    async value(sql: string, placeholders?: object): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            this.db.get(sql, placeholders, (err, row) => {
                if (err !== null) {
                    reject(err);
                    return;
                }

                let keys = Object.keys(row);

                if (keys.length === 0) {
                    reject(new DatabaseError(DatabaseErrorCode.NoResult, "Query returned no result"));
                }

                resolve(row[keys[0]]);
            });
        });
    }

    async one(sql: string, placeholders?: object): Promise<any> {
        return new Promise((resolve, reject) => {
            this.db.get(sql, placeholders, (err, row) => {
                if (err !== null) {
                    reject(err);
                    return;
                }

                resolve(row);
            });
        });
    }

    async all(sql: string, placeholders?: object): Promise<any[]> {
        return new Promise<object[]>((resolve, reject) => {
            this.db.all(sql, placeholders, (err, rows) => {
                if (err !== null) {
                    reject(err);
                    return;
                }

                resolve(rows);
            });
        });
    }

    async run(sql: string, placeholders?: object): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.db.run(sql, placeholders, (err) => {
                if (err !== null) {
                    if (err.message.includes('SQLITE_CONSTRAINT')) {
                        reject(new DatabaseError(DatabaseErrorCode.ConstraintViolation, err.toString()));
                        return;
                    }

                    reject(new DatabaseError(DatabaseErrorCode.Other, err.toString()));
                    return;
                }

                resolve();
            });
        });
    }
}