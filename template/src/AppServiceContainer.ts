import {AbstractServiceContainer} from 'nergal';
import Router from "./Router";
import ChatCommandsLoader from "./ChatCommands/ChatCommandsLoader";

export default class AppServiceContainer extends AbstractServiceContainer {
    protected static router = new Router();
    protected static chatCommandsLoader = new ChatCommandsLoader();

    public static init()
    {
        super.init();
    }

    public static async start()
    {
        await super.start();
    }
}