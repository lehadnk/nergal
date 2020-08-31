import {DiscordMessage} from "nergal/src/DTO/DiscordMessage";
import {DiscordControllerResponse} from "nergal/src/DTO/DiscordControllerResponse";
import IRouter from 'nergal/src/Routing/IRouter';
import DirectMessageController from "./Controllers/DirectMessageController";

export default class Router implements IRouter {
    async route(msg: DiscordMessage): Promise<DiscordControllerResponse> {
        let controller = new DirectMessageController();
        return await controller.dispatch(msg);
    }
}