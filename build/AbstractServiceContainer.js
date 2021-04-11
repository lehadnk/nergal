"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractServiceContainer = void 0;
const sqlite3_1 = require("sqlite3");
const discord_js_1 = require("discord.js");
const SqliteDbAdapter_1 = require("./Services/Db/SqliteDbAdapter");
const DiscordService_1 = require("./Services/Discord/DiscordService");
const dotenv_1 = require("dotenv");
const MessagingService_1 = require("./Services/Discord/MessagingService");
const fs_1 = require("fs");
const ChatCommandsService_1 = require("./Services/ChatCommands/ChatCommandsService");
class AbstractServiceContainer {
    static init() {
        if (!fs_1.existsSync('.env')) {
            console.error("Error during startup: no .env file exists");
            process.exit(1);
        }
        console.log('Initialization...');
        dotenv_1.config();
        this.discordClient = new discord_js_1.Client();
        let databaseFile = './' + process.env.APP_ENV + '-db.db3';
        let db = new sqlite3_1.Database(databaseFile);
        this.db = new SqliteDbAdapter_1.SqliteDbAdapter(db);
        let admins = new Map();
        let adminIds = JSON.parse(process.env.ADMIN_IDS);
        adminIds.forEach(e => admins.set(e, null));
        let commands = this.chatCommandsLoader.load();
        let chatCommandsService = new ChatCommandsService_1.ChatCommandsService(commands);
        this.discordService = new DiscordService_1.DiscordService(this.discordClient, this.router, process.env.DISCORD_BOT_TOKEN, admins, chatCommandsService);
        this.messagingService = new MessagingService_1.default(this.discordClient);
    }
    static async start() {
        await this.discordService.start().catch(reject => {
            throw "Unable to start the application: " + reject;
        }).then(() => {
            console.log('The application started!');
        });
    }
    static updateRouter() {
        this.discordService.setRouter(this.router);
    }
}
exports.AbstractServiceContainer = AbstractServiceContainer;
//# sourceMappingURL=AbstractServiceContainer.js.map