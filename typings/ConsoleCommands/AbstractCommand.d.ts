import { Client } from 'discord.js';
import { IDbAdapter } from "../Services/Db/IDbAdapter";
export declare class AbstractCommand {
    discordClient: Client;
    db: IDbAdapter;
}
