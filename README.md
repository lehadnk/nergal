# Running tests
```
npm run test
```

# Compilation
```
npm run compile
```

# Project setup
Add following commands into the package.json scripts structure:
```json
{
    "scripts": {
      "nergal": "node_modules/.bin/ts-node console.ts",
      "migrate": "node_modules/db-migrate/bin/db-migrate"
    }
}
```

Then init the project:
```shell script
node node_modules/nergal/init
```

# Migrations
To create new migration run
```
npm run migrate create <migration name>
```

Creating new table:
```js
await db.createTable('votes', {
    id: { type: 'int', primaryKey: true, autoIncrement: true},
    participant_id: 'int',
    voter_discord_id: 'string',
  });
```

Adding indexes:
```js
db.addIndex('votes', 'unique_voter_and_participant', ['participant_id', 'voter_discord_id'], true);
```

Dropping table
```js
return db.dropTable('votes');
```

Adding column
```js
await db.addColumn('votes', 'voter_discord_name', 'string');
```

Removing column
```js
db.removeColumn('votes');
```

Running migrations
```
npm run migrate up
```

# Running in dev mode
```
npm run start
```

# Running console commands
```
npm run console 
```