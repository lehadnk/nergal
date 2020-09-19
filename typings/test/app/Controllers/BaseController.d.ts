import { DiscordMessage } from "../../../src/DTO/DiscordMessage";
import { DiscordControllerResponse } from "../../../src/DTO/DiscordControllerResponse";
export declare class BaseController {
    constructor();
    dispatch(msg: DiscordMessage): Promise<DiscordControllerResponse>;
}
