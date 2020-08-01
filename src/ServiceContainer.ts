import {IDbAdapter} from "./IDbAdapter";
import {Database} from "sqlite3";
import {Client} from 'discord.js';
import {SqliteDbAdapter} from "./SqliteDbAdapter";
import {DiscordService} from "./DiscordService";
import {config as dotenvInit} from "dotenv";
import Router from "./Routing/Router";

export default class ServiceContainer {
    static db: IDbAdapter;
    static discordClient: Client;
    static discordService: DiscordService;

    public static init()
    {
        dotenvInit();

        this.discordClient = new Client();

        let databaseFile = './' + process.env.APP_ENV + '-db.db3';
        let db = new Database(databaseFile);
        this.db = new SqliteDbAdapter(db);

        let admins = new Map<string, null>();
        let adminIds = JSON.parse(process.env.ADMIN_IDS);
        adminIds.forEach(e => admins.set(e, null));

        this.discordService = new DiscordService(
            ServiceContainer.discordClient,
            new Router(),
            process.env.DISCORD_BOT_TOKEN,
            admins
        );
    }

    public static start()
    {
        this.discordService.start();
    }
}