import {IDbAdapter} from "./Services/Db/IDbAdapter";
import {Database} from "sqlite3";
import {Client} from 'discord.js';
import {SqliteDbAdapter} from "./Services/Db/SqliteDbAdapter";
import {DiscordService} from "./Services/Discord/DiscordService";
import {config as dotenvInit} from "dotenv";
import {IRouter} from "./Routing/IRouter";
import MessagingService from "./Services/Discord/MessagingService";

export abstract class AbstractServiceContainer {
    static db: IDbAdapter;
    static discordClient: Client;
    static discordService: DiscordService;
    static messagingService: MessagingService;

    protected static router: IRouter;

    public static init()
    {
        console.log('Initialization...');
        dotenvInit();

        this.discordClient = new Client();
        let databaseFile = './' + process.env.APP_ENV + '-db.db3';
        let db = new Database(databaseFile);
        this.db = new SqliteDbAdapter(db);

        let admins = new Map<string, null>();
        let adminIds = JSON.parse(process.env.ADMIN_IDS);
        adminIds.forEach(e => admins.set(e, null));

        this.discordService = new DiscordService(
            this.discordClient,
            this.router,
            process.env.DISCORD_BOT_TOKEN,
            admins
        );

        this.messagingService = new MessagingService(this.discordClient);
    }

    public static async start()
    {
        let result = await this.discordService.start();
        if (result === false) {
            throw "Unable to start the application";
        } else {
            console.log('The application started!');
        }
    }

    public static updateRouter()
    {
        this.discordService.setRouter(this.router);
    }
}