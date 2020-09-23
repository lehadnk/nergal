"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqliteDbAdapter = void 0;
const DatabaseError_1 = require("../../Exceptions/DatabaseError");
const DatabaseErrorCode_1 = require("../../Exceptions/DatabaseErrorCode");
class SqliteDbAdapter {
    constructor(dbConnection) {
        this.db = dbConnection;
    }
    async value(sql, placeholders) {
        return new Promise((resolve, reject) => {
            this.db.get(sql, placeholders, (err, row) => {
                if (err !== null) {
                    reject(err);
                    return;
                }
                let keys = Object.keys(row);
                if (keys.length === 0) {
                    reject(new DatabaseError_1.DatabaseError(DatabaseErrorCode_1.DatabaseErrorCode.NoResult, "Query returned no result"));
                }
                resolve(row[keys[0]]);
            });
        });
    }
    async one(sql, placeholders) {
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
    async all(sql, placeholders) {
        return new Promise((resolve, reject) => {
            this.db.all(sql, placeholders, (err, rows) => {
                if (err !== null) {
                    reject(err);
                    return;
                }
                resolve(rows);
            });
        });
    }
    async run(sql, placeholders) {
        return new Promise((resolve, reject) => {
            this.db.run(sql, placeholders, (err) => {
                if (err !== null) {
                    if (err.message.includes('SQLITE_CONSTRAINT')) {
                        reject(new DatabaseError_1.DatabaseError(DatabaseErrorCode_1.DatabaseErrorCode.ConstraintViolation, err.toString()));
                        return;
                    }
                    reject(new DatabaseError_1.DatabaseError(DatabaseErrorCode_1.DatabaseErrorCode.Other, err.toString()));
                    return;
                }
                resolve();
            });
        });
    }
}
exports.SqliteDbAdapter = SqliteDbAdapter;
//# sourceMappingURL=SqliteDbAdapter.js.map