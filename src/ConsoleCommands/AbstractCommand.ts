import {Client} from 'discord.js';
import {IDbAdapter} from "../Services/Db/IDbAdapter";

export class AbstractCommand {
    public discordClient: Client;
    public db: IDbAdapter;
}