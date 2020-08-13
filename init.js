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
fs.mkdirSync('./src/Commands');
fs.mkdirSync('./test');
fs.copyFileSync('node_modules/nergal/template/run.ts', './run.ts');
fs.copyFileSync('node_modules/nergal/template/console.ts', './console.ts');
fs.copyFileSync('node_modules/nergal/template/test/Mocha.test.ts', './test/Mocha.test.ts');
fs.copyFileSync('node_modules/nergal/template/test/startup.ts', './test/startup.ts');
fs.copyFileSync('node_modules/nergal/template/src/AppServiceContainer.ts', './src/AppServiceContainer.ts');
fs.copyFileSync('node_modules/nergal/template/src/TestRouter.ts', './src/TestRouter.ts');
fs.copyFileSync('node_modules/nergal/template/src/Commands/index.ts', './src/Commands/index.ts');
fs.copyFileSync('node_modules/nergal/template/src/Commands/AppCommandsLoader.ts', './src/Commands/AppCommandsLoader.ts');
fs.copyFileSync('node_modules/nergal/template/src/Commands/ListGuilds.ts', './src/Commands/ListGuilds.ts');

console.log('New project init success!');