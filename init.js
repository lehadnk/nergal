let fs = require('fs');

function die(reason) {
    console.error(reason);
    process.exit(1);
}

if (fs.existsSync('./console.ts')) {
    die('Directory is not empty!');
}

if (fs.existsSync('./run.ts')) {
    die('Directory is not empty!');
}

if (fs.existsSync('./src')) {
    die('Directory is not empty!');
}

if (fs.existsSync('./test')) {
    die('Directory is not empty!');
}

fs.mkdirSync('./src');
fs.mkdirSync('./src/ChatCommands');
fs.mkdirSync('./src/ConsoleCommands');
fs.mkdirSync('./src/Controllers');
fs.mkdirSync('./test');
fs.copyFileSync('node_modules/nergal/template/run.ts', './run.ts');
fs.copyFileSync('node_modules/nergal/template/console.ts', './console.ts');
fs.copyFileSync('node_modules/nergal/template/test/Mocha.test.ts', './test/Mocha.test.ts');
fs.copyFileSync('node_modules/nergal/template/test/startup.ts', './test/startup.ts');
fs.copyFileSync('node_modules/nergal/template/src/AppServiceContainer.ts', './src/AppServiceContainer.ts');
fs.copyFileSync('node_modules/nergal/template/src/Router.ts', './src/Router.ts');
fs.copyFileSync('node_modules/nergal/template/src/Controllers/DirectMessageController.ts', './src/Controllers/DirectMessageController.ts');
fs.copyFileSync('node_modules/nergal/template/src/ConsoleCommands/index.ts', './src/ConsoleCommands/index.ts');
fs.copyFileSync('node_modules/nergal/template/src/ConsoleCommands/AppCommandsLoader.ts', './src/ConsoleCommands/AppCommandsLoader.ts');
fs.copyFileSync('node_modules/nergal/template/src/ConsoleCommands/ListGuilds.ts', './src/ConsoleCommands/ListGuilds.ts');
fs.copyFileSync('node_modules/nergal/template/src/ChatCommands/index.ts', './src/ChatCommands/index.ts');
fs.copyFileSync('node_modules/nergal/template/src/ChatCommands/AppChatCommandsLoader.ts', './src/ChatCommands/AppChatCommandsLoader.ts');
fs.copyFileSync('node_modules/nergal/template/src/ChatCommands/HelloCommand.ts', './src/ChatCommands/HelloCommand.ts');

console.log('New project init success!');