import {IDbAdapter} from "../Services/Db/IDbAdapter";
import {AbstractModel} from "../Models/AbstractModel";

export abstract class AbstractDAO<T extends AbstractModel> {
    protected db: IDbAdapter;

    abstract table: string;
    abstract fields: string[];

    private readonly factory: () => T;

    constructor(db: IDbAdapter, factory: () => T) {
        this.db = db;
        this.factory = factory;
    }

    public async get(id: number): Promise<T>
    {
        return this.getOneByField('id', id.toString());
    }

    public async getAll(): Promise<T[]>
    {
        let data = await this.db.all("SELECT * FROM " + this.table);
        return data.map((data) => {
            let object = this.factory();
            return this.populate(object, data);
        });
    }

    public async getOneByField(field: string, value: string): Promise<T>
    {
        let data = await this.db.one("SELECT * FROM " + this.table + " WHERE " + field + " = ?1", {1: value});
        if (data === undefined) {
            return null;
        }

        let object = this.factory();
        return this.populate(object, data);
    }

    public async getAllByField(field: string, value: string): Promise<T[]>
    {
        let data = await this.db.all("SELECT * FROM " + this.table + " WHERE " + field + " = ?1", {1: value});

        return data.map((data) => {
            let object = this.factory();
            return this.populate(object, data);
        });
    }

    public async save(object: T): Promise<boolean>
    {
        let columnValues = new Map<string, any>();
        this.fields.forEach((field) => {
            columnValues.set(field, object[field]);
        });
        columnValues.delete('id');

        if (object.id === undefined) {
            await this.create(columnValues);
        } else {
            await this.update(object.id, columnValues);
        }
        return true;
    }

    private async create(columnValues: Map<string, any>): Promise<void>
    {
        let names = Array.from(columnValues.keys()).join(', ');
        let values = Array.from(columnValues.values());

        let placeholders: string[] = [];
        for (let i = 1; i <= values.length; i++) {
            placeholders.push('?'+i);
        }
        let placeholdersStr = placeholders.join(', ');

        await this.db.run("INSERT INTO " + this.table + " (" + names + ") VALUES (" + placeholdersStr + ");", values);
        return;
    }

    private async update(id: number, columnValues: Map<string, any>)
    {
        let values: string[] = [];
        let i = 1;
        columnValues.forEach((value, key) => {
            values.push(key + ' = ' + '?'+i);
            i++;
        });
        let valuesStr = values.join(', ');

        await this.db.run("UPDATE " + this.table + " SET " + valuesStr + " WHERE id = " + id, Array.from(columnValues.values()));
    }

    private populate(object: T, dbResult: [])
    {
        this.fields.forEach(function(field) {
            object[field] = dbResult[field];
        });
        return object;
    }
}