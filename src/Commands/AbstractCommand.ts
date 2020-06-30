import {Client} from 'discord.js';
import {IDbAdapter} from "../IDbAdapter";

export default class AbstractCommand {
    public discordClient: Client;
    public db: IDbAdapter;
}