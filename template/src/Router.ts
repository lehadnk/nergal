import {DiscordMessage} from "nergal";
import {DiscordControllerResponse} from "nergal";
import {IRouter} from 'nergal';
import DirectMessageController from "./Controllers/DirectMessageController";

export default class Router implements IRouter {
    async route(msg: DiscordMessage): Promise<DiscordControllerResponse> {
        let controller = new DirectMessageController();
        return await controller.dispatch(msg);
    }
}