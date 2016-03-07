
exports.up = function(knex, Promise) {
  return knex.schema.createTable('taste_likes', function(table){
    table.increments();
    table.integer('feature_id');
    table.integer('value_id');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('taste_likes');
};
