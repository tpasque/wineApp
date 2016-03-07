// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/wine_development'
    // seeds:
  },


  production: {
        client: 'pg',
        connection: process.env.DATABASE_URL + '?ssl=true'
      }
};
