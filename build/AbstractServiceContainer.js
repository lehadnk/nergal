"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractServiceContainer = void 0;
const sqlite3_1 = require("sqlite3");
const discord_js_1 = require("discord.js");
const SqliteDbAdapter_1 = require("./Services/Db/SqliteDbAdapter");
const DiscordService_1 = require("./Services/Discord/DiscordService");
const dotenv_1 = require("dotenv");
class AbstractServiceContainer {
    static init() {
        console.log('Initialization...');
        dotenv_1.config();
        this.discordClient = new discord_js_1.Client();
        let databaseFile = './' + process.env.APP_ENV + '-db.db3';
        let db = new sqlite3_1.Database(databaseFile);
        this.db = new SqliteDbAdapter_1.SqliteDbAdapter(db);
        let admins = new Map();
        let adminIds = JSON.parse(process.env.ADMIN_IDS);
        adminIds.forEach(e => admins.set(e, null));
        this.discordService = new DiscordService_1.DiscordService(this.discordClient, this.router, process.env.DISCORD_BOT_TOKEN, admins);
    }
    static async start() {
        let result = await this.discordService.start();
        if (result === false) {
            throw "Unable to start the application";
        }
        else {
            console.log('The application started!');
        }
    }
    static updateRouter() {
        this.discordService.setRouter(this.router);
    }
}
exports.AbstractServiceContainer = AbstractServiceContainer;
//# sourceMappingURL=AbstractServiceContainer.js.map