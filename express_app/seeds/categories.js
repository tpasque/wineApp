
exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('categories').del(),

    knex('categories').insert({id: 1, name: 'premium'}),
    knex('categories').insert({id: 2, name: 'value'})
  );
};
