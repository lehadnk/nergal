"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitCommand = void 0;
const AbstractCommand_1 = require("./AbstractCommand");
class InitCommand extends AbstractCommand_1.AbstractCommand {
    constructor() {
        super(...arguments);
        this.name = 'init-project';
    }
    async run(args) {
        let count = 0;
        this.discordClient.guilds.cache.each(async (guild) => {
            count++;
            console.log(guild.name);
        });
        console.log(count + " guilds total.");
    }
}
exports.InitCommand = InitCommand;
//# sourceMappingURL=InitCommand.js.map