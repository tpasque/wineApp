
exports.seed = function(knex, Promise) {
  return Promise.join(
      knex('taste_likes').del(),

      knex('taste_likes').insert({
        feature_id: 402,
        value_id: 407,
      }),
      knex('taste_likes').insert({
        feature_id: 400,
        value_id: 404,
      }),
      knex('taste_likes').insert({
        feature_id: 400,
        value_id: 403,
      }),
      knex('taste_likes').insert({
        feature_id: 400,
        value_id: 405,
      }),
      knex('taste_likes').insert({
        feature_id: 401,
        value_id: 404,
      }),
      knex('taste_likes').insert({
        feature_id: 401,
        value_id: 406,
      })
    );
};
