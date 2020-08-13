import ServiceContainer from "../../src/AbstractServiceContainer";
import IRouter from "../../src/Routing/IRouter";
import TestRouter from "./TestRouter";
import {config as dotenvInit} from "dotenv";
import {Database} from "sqlite3";
import {SqliteDbAdapter} from "../../src/SqliteDbAdapter";

export default class UnitTestServiceContainer extends ServiceContainer {
    protected static router: IRouter = new TestRouter();

    public static init()
    {
        let databaseFile = './test-db.db3';
        let db = new Database(databaseFile);
        this.db = new SqliteDbAdapter(db);

        let admins = new Map<string, null>();
        let adminIds = JSON.parse(process.env.ADMIN_IDS);
        adminIds.forEach(e => admins.set(e, null));
    }

    public static async start()
    {
    }
}