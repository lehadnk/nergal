import {AbstractServiceContainer} from "../../src/AbstractServiceContainer";
import {IRouter} from "../../src/Routing/IRouter";
import TestRouter from "./TestRouter";
import TestChatCommandsLoader from "./ChatCommands/TestChatCommandsLoader";

export default class TestServiceContainer extends AbstractServiceContainer {
    protected static router: IRouter = new TestRouter();
    protected static chatCommandsLoader = new TestChatCommandsLoader();
}