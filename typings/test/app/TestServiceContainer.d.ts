import ServiceContainer from "../../src/AbstractServiceContainer";
import { IRouter } from "../../src/Routing/IRouter";
export default class TestServiceContainer extends ServiceContainer {
    protected static router: IRouter;
}
