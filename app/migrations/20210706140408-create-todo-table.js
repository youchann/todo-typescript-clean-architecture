'use strict';

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db) {
  return db.createTable('todo', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    name: { type: 'string', notNull: true },
    memo: { type: 'string' },
    is_done: { type: 'boolean', notNull: true, defaultValue: false },
    created_at: { type: 'datetime', notNull: true, defaultValue: new String('NOW()') },
    updated_at: { type: 'datetime' },
  });
};

exports.down = function (db) {
  return db.dropTable('todo');
};

exports._meta = {
  version: 1,
};
