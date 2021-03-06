const CONFIG = require('../config/config.json');

/** Don't forget to update your config settings.
 *** Make sure you create your database locally. **/

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      // Replace with your own username
      user: CONFIG.DATABASE.DB_USERNAME,
      // Replace with your own password
      password: CONFIG.DATABASE.DB_PW,
      // Replace with your own database
      database: CONFIG.DATABASE.NAME,
      charset: 'utf8'
    },
    migrations: {
      directory: __dirname + '/knex/migrations'
    },
    seeds: {
      directory: __dirname + '/knex/seeds'
    }
  }
};
