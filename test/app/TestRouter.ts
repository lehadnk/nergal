import {DiscordMessage} from "../../src/DTO/DiscordMessage";
import {DiscordControllerResponse} from "../../src/DTO/DiscordControllerResponse";
import {BaseController} from "./Controllers/BaseController";
import {AdminController} from "./Controllers/AdminController";
import IRouter from "../../src/Routing/IRouter";

export default class TestRouter implements IRouter {
    public async route(msg: DiscordMessage): Promise<DiscordControllerResponse>
    {
        if (msg.isAdmin && msg.isPrivate) {
            let controller = new AdminController();
            return await controller.dispatch(msg);
        } else {
            let controller = new BaseController();
            return await controller.dispatch(msg);
        }
    }
}