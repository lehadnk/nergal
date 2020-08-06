import {DiscordMessage} from "nergal/src/DTO/DiscordMessage";
import {DiscordControllerResponse} from "nergal/src/DTO/DiscordControllerResponse";
import IRouter from 'nergal/src/Routing/IRouter';

class DirectMessageController {
    dispatch(msg: DiscordMessage): Promise<DiscordControllerResponse> {
        console.log("Handling DM " + msg.message);
        // let c = new User();

        return new Promise<DiscordControllerResponse>((resolve) => {
            resolve(new DiscordControllerResponse("Hello!", false));
        });
    }
}

export default class Router implements IRouter {
    async route(msg: DiscordMessage): Promise<DiscordControllerResponse> {
        let controller = new DirectMessageController();
        return await controller.dispatch(msg);
    }
}