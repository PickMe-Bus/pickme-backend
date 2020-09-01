
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('booking').del()
    .then(function () {
      // Inserts seed entries
      return knex('booking').insert([
        {
          trip_id: 1,
          user_id: 1,
          created_on: "2020-07-03"
        },
        {
          trip_id: 1,
          user_id: 2,
          created_on: "2020-07-03"
        },
        {
          trip_id: 2,
          user_id: 2,
          created_on: "2020-07-03"
        },
        {
          trip_id: 2,
          user_id: 1,
          created_on: "2020-07-03"
        },
        {
          trip_id: 3,
          user_id: 1,
          created_on: "2020-07-03"
        },
      ]);
    });
};
