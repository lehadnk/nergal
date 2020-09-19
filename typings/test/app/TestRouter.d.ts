import { DiscordMessage } from "../../src/DTO/DiscordMessage";
import { DiscordControllerResponse } from "../../src/DTO/DiscordControllerResponse";
import { IRouter } from "../../src/Routing/IRouter";
export default class TestRouter implements IRouter {
    route(msg: DiscordMessage): Promise<DiscordControllerResponse>;
}
