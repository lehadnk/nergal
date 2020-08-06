import ServiceContainer from 'nergal/src/AbstractServiceContainer';
import Router from "./Router";

export default class AppServiceContainer extends ServiceContainer {
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