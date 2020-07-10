import {IDbAdapter} from "../IDbAdapter";

export abstract class AbstractDAO {

    protected db: IDbAdapter;

    abstract table: string;

    constructor(db: IDbAdapter) {
        this.db = db;
    }
}