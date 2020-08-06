// import {CommandService} from "./src/CommandService";
// import {config as dotenvInit} from "dotenv";
// import {Database} from "sqlite3";
// import {SqliteDbAdapter} from "./src/SqliteDbAdapter";
// import {Client} from 'discord.js';
//
// dotenvInit();
//
// let databaseFile = './' + process.env.APP_ENV + '-db.db3';
// let db = new Database(databaseFile);
// let adapter = new SqliteDbAdapter(db);
// let discordClient = new Client();
//
import {CommandService} from "./src/CommandService";
import AbstractServiceContainer from "./src/AbstractServiceContainer";

AbstractServiceContainer.init();
let commandService = new CommandService();
commandService.run();