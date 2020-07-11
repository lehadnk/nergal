import "reflect-metadata";
import {config as dotenvInit} from 'dotenv';
import {DiscordService} from "./src/DiscordService";
import {Database} from "sqlite3";
import {SqliteDbAdapter} from "./src/SqliteDbAdapter";
import {Client} from "discord.js";

dotenvInit();

let databaseFile = './' + process.env.APP_ENV + '-db.db3';
let db = new Database(databaseFile);
let adapter = new SqliteDbAdapter(db);

let admins = new Map<string, null>();
let adminIds = JSON.parse(process.env.ADMIN_IDS);
adminIds.forEach(e => admins.set(e, null));

let discordClient = new Client();
let service = new DiscordService(
    discordClient,
    process.env.DISCORD_BOT_TOKEN,
    admins
);

service.start();