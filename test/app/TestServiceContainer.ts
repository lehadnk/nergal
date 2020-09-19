import {AbstractServiceContainer} from "../../src/AbstractServiceContainer";
import {IRouter} from "../../src/Routing/IRouter";
import TestRouter from "./TestRouter";

export default class TestServiceContainer extends AbstractServiceContainer {
    protected static router: IRouter = new TestRouter();
}