import { Client } from 'discord.js';
import IDbAdapter from "../Services/Db/IDbAdapter";
export default class AbstractCommand {
    discordClient: Client;
    db: IDbAdapter;
}
