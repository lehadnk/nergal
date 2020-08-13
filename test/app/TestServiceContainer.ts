import ServiceContainer from "../../src/AbstractServiceContainer";
import IRouter from "../../src/Routing/IRouter";
import TestRouter from "./TestRouter";

export default class TestServiceContainer extends ServiceContainer {
    protected static router: IRouter = new TestRouter();
}