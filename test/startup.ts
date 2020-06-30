import {unlinkSync, existsSync} from 'fs';
import {exec} from 'child_process';

const testDbFile = 'test-db.db3';

if (existsSync(testDbFile)) {
    unlinkSync(testDbFile);
    console.log('Test db removed...');
}

exec("npm run migrate up");