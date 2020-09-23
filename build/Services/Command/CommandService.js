"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandService = void 0;
class CommandService {
    constructor(loader) {
        this.commands = loader.load();
    }
    async run() {
        if (process.argv.length < 3) {
            console.error("Please specify the command: npm run console <command>");
            process.exit(0);
        }
        let command = process.argv[2];
        let args = process.argv.splice(0, 3);
        let handler = this.commands.get(command);
        if (!handler) {
            console.error("No such command: " + command);
            process.exit(1);
        }
        handler.run(args)
            .then(() => process.exit(0))
            .catch(error => {
            console.error(error);
            process.exit(1);
        });
    }
}
exports.CommandService = CommandService;
//# sourceMappingURL=CommandService.js.map