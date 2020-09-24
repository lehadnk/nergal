"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractDAO = void 0;
class AbstractDAO {
    constructor(db, factory) {
        this.db = db;
        this.factory = factory;
    }
    async get(id) {
        return this.getOneByField('id', id.toString());
    }
    async getAll() {
        let data = await this.db.all("SELECT * FROM " + this.table);
        return data.map((data) => {
            return this.populate(data);
        });
    }
    async getOneByField(field, value) {
        let data = await this.db.one("SELECT * FROM " + this.table + " WHERE " + field + " = ?1", { 1: value });
        if (data === undefined) {
            return null;
        }
        return this.populate(data);
    }
    async getAllByField(field, value) {
        let data = await this.db.all("SELECT * FROM " + this.table + " WHERE " + field + " = ?1", { 1: value });
        return data.map((data) => {
            return this.populate(data);
        });
    }
    async save(object) {
        let columnValues = new Map();
        this.fields.forEach((field) => {
            columnValues.set(field, object[field]);
        });
        columnValues.delete('id');
        if (object.id === undefined) {
            await this.create(columnValues);
        }
        else {
            await this.update(object.id, columnValues);
        }
        return true;
    }
    async create(columnValues) {
        let names = Array.from(columnValues.keys()).join(', ');
        let values = Array.from(columnValues.values());
        let placeholders = [];
        for (let i = 1; i <= values.length; i++) {
            placeholders.push('?' + i);
        }
        let placeholdersStr = placeholders.join(', ');
        await this.db.run("INSERT INTO " + this.table + " (" + names + ") VALUES (" + placeholdersStr + ");", values);
        return;
    }
    async update(id, columnValues) {
        let values = [];
        let i = 1;
        columnValues.forEach((value, key) => {
            values.push(key + ' = ' + '?' + i);
            i++;
        });
        let valuesStr = values.join(', ');
        await this.db.run("UPDATE " + this.table + " SET " + valuesStr + " WHERE id = " + id, Array.from(columnValues.values()));
    }
    populate(dbResult) {
        let object = this.factory();
        this.fields.forEach(function (field) {
            object[field] = dbResult[field];
        });
        return object;
    }
}
exports.AbstractDAO = AbstractDAO;
//# sourceMappingURL=AbstractDAO.js.map