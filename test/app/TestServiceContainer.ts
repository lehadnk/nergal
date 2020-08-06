import ServiceContainer from "../../src/AbstractServiceContainer";
import IRouter from "../../src/Routing/IRouter";
import Router from "./Router";

export default class TestServiceContainer extends ServiceContainer {
    protected static router: IRouter = new Router();
}