
exports.seed = function(knex, Promise) {
  return Promise.join(
      knex('wines').del(),

      knex('wines').insert({
        id: 400,
        brand_name: 'Molly Dooker Carnival of Love 2011',
        vintage: 2011,
        varietal: 'Shiraz',
        city: 'McLaren Vale',
        state: 'McLaren Vale',
        country: 'Australia',
        price: 79.99,
        img_url: 'http://cache1.wine.com/labels/121172le.jpg',
        category_id: 1
      }),
      knex('wines').insert({
        id: 401,
        brand_name: 'Pride Mountain 2011',
        vintage: 2011,
        varietal: 'Merlot',
        city: 'Napa',
        state: 'California',
        country: 'United States',
        price: 65.99,
        img_url: 'http://cache.wine.com/labels/153108l.jpg',
        category_id: 1
      }),
      knex('wines').insert({
        id: 402,
        brand_name: 'Rombauer 2013',
        vintage: 2013,
        varietal: 'Chardonnay',
        city: 'Carneros',
        state: 'California',
        country: 'United States',
        price: 34.99,
        img_url: 'http://cache2.wine.com/labels/145612le.jpg',
        category_id: 1
      }),
      knex('wines').insert({
        id: 403,
        brand_name: 'Parducci True Grit Reserve Cabernet 2013',
        vintage: 2013,
        varietal: 'Cabernet Sauvignon',
        city: 'North Coast',
        state: 'California',
        country: 'United States',
        price: 18.99,
        img_url: 'http://cache2.wine.com/labels/147825le.jpg',
        category_id: 2
      }),
      knex('wines').insert({
        id: 404,
        brand_name: 'Columbia Crest H3 Les Chevaux Red 2012',
        vintage: 2012,
        varietal: 'Cabernet Sauvignon',
        city: 'Columbia Valley',
        state: 'Washington',
        country: 'United States',
        price: 13.99,
        img_url: 'http://cache1.wine.com/labels/141659le.jpg',
        category_id: 2
      }),
      knex('wines').insert({
        id: 405,
        brand_name: 'Avalon California Cabernet 2014',
        vintage: 2014,
        varietal: 'Cabernet Sauvignon',
        city: 'Santa Rosa',
        state: 'California',
        country: 'United States',
        price: 10.99,
        img_url: 'http://cache.wine.com/labels/152528m.jpg',
        category_id: 2
      }),
      knex('wines').insert({
        id: 406,
        brand_name: 'Francis Ford Coppola Diamond Collection 2013',
        vintage: 2013,
        varietal: 'Syrah',
        city: 'Central Coast',
        state: 'California',
        country: 'United States',
        price: 14.99,
        img_url: 'http://cache2.wine.com/labels/150366le.jpg',
        category_id: 2
      }),
      knex('wines').insert({
        id: 407,
        brand_name: 'MacMurray Ranch 2013',
        vintage: 2013,
        varietal: 'Chardonnay',
        city: 'Russian River',
        state: 'California',
        country: 'United States',
        price: 16.99,
        img_url: 'http://cache2.wine.com/labels/134072le.jpg',
        category_id: 2
      })
    );
};
