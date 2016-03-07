
exports.up = function(knex, Promise) {
  return knex.schema.createTable('wines', function(table){
    table.increments();
    table.string('brand_name');
    table.integer('vintage');
    table.string('varietal');
    table.string('city');
    table.string('state');
    table.string('country');
    table.decimal('price');
    table.text('img_url');
    table.integer('category_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('wines');
};
