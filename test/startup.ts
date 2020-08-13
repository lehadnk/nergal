import UnitTestServiceContainer from "./app/UnitTestServiceContainer";
import {config as dotenvInit} from "dotenv";

dotenvInit({
    path: '.env.test'
});

// let DBMigrate = require('db-migrate');
// let dbmigrate = DBMigrate.getInstance(true);
// dbmigrate.silence(true);
// dbmigrate.reset()
//     .then(() => dbmigrate.up());

UnitTestServiceContainer.init();
UnitTestServiceContainer.start();