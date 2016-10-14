exports.seed = (knex, Promise) => {
  return knex('Users').del()
    .then(() => {
      return Promise.all([
        knex('Users').insert({ id: 1, name: 'Han Solo' }),
        knex('Users').insert({ id: 2, name: 'Luke Skywalker' }),
        knex('Users').insert({ id: 4, name: 'Boba Fett' }),
        knex('Users').insert({ id: 3, name: 'Darth Vader' }),
        knex('Users').insert({ id: 4, name: 'Kylo Ren' }),
        knex('Users').insert({ id: 5, name: 'Leia Skywalker' }),
      ]);
    });
};
