import {DiscordMessage} from "../DTO/DiscordMessage";
import {DiscordControllerResponse} from "../DTO/DiscordControllerResponse";
import {BaseController} from "../Controllers/BaseController";
import {AdminController} from "../Controllers/AdminController";

export default class Router {
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