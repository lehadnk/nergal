import {DiscordMessage} from "../DTO/DiscordMessage";
import {DiscordControllerResponse} from "../DTO/DiscordControllerResponse";
import {BaseController} from "../Controllers/BaseController";
import {AdminController} from "../Controllers/AdminController";
import IRouter from "./IRouter";

export default class Router implements IRouter {
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