'use strict';

let dbm;
let type;
let seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = async function(db) {
  await db.createTable('users', {
    id: { type: 'int', primaryKey: true, autoIncrement: true},
    name: 'string',
    discord_user_id: 'string',
  });

  db.addIndex('users', 'unique_discord_user_id', ['discord_user_id'], true);
};

exports.down = function(db) {
  return db.dropTable('users');
};

exports._meta = {
  "version": 1
};
