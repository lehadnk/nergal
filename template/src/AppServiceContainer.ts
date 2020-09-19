import {AbstractServiceContainer} from 'nergal';
import Router from "./Router";

export default class AppServiceContainer extends AbstractServiceContainer {
    protected static router = new Router();

    public static init()
    {
        super.init();
    }

    public static async start()
    {
        await super.start();
    }
}