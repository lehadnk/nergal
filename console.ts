import "reflect-metadata";
import {CommandService} from "./src/CommandService";
import {config as dotenvInit} from "dotenv";
import {Database} from "sqlite3";
import {SqliteDbAdapter} from "./src/SqliteDbAdapter";
import {Client} from 'discord.js';

dotenvInit();

let databaseFile = './' + process.env.APP_ENV + '-db.db3';
let db = new Database(databaseFile);
let adapter = new SqliteDbAdapter(db);
let discordClient = new Client();

let commandService = new CommandService(discordClient, adapter);

if (process.argv.length < 3) {
    console.error("Please specify the command: npm run console <command>");
    process.exit(0);
}

let command = process.argv[2];
let args = process.argv.splice(0, 3);

discordClient.on('ready', () => {
    commandService.run(command, args);
});

discordClient.login(process.env.DISCORD_BOT_TOKEN)
    .catch(r => {
        console.error("Unable to connect to discord: " + r);
    });