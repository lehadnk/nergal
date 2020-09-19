import { IDbAdapter } from "../Services/Db/IDbAdapter";
import AbstractModel from "../Models/AbstractModel";
export default abstract class AbstractDAO<T extends AbstractModel> {
    protected db: IDbAdapter;
    abstract table: string;
    abstract fields: string[];
    private readonly factory;
    constructor(db: IDbAdapter, factory: () => T);
    get(id: number): Promise<T>;
    getAll(): Promise<T[]>;
    getOneByField(field: string, value: string): Promise<T>;
    getAllByField(field: string, value: string): Promise<T[]>;
    save(object: T): Promise<boolean>;
    private create;
    private update;
    private populate;
}
