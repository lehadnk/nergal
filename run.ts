import {config as dotenvInit} from 'dotenv';
import {DiscordService} from "./src/DiscordService";
import {Database} from "sqlite3";
import {SqliteDbAdapter} from "./src/SqliteDbAdapter";
import {Client} from "discord.js";
import {DiscordController} from "./src/Controllers/DiscordController";

dotenvInit();

let db = new Database('./prod-db.db3');
let adapter = new SqliteDbAdapter(db);

let adminIds = JSON.parse(process.env.ADMIN_IDS);

let discordController = new DiscordController(adminIds);
let discordClient = new Client();
let service = new DiscordService(
    discordController,
    discordClient,
    process.env.DISCORD_BOT_TOKEN,
    process.env.CONTEST_CHANNEL_NAME
);

service.start();