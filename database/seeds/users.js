exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          // id: 1,
          email: "babatundea15@gmail.com",
          first_name: "Babatunde",
          last_name: "Adeniran",
          password: "nopassword",
          is_admin: false,
        },
        {
          // id: 2,
          email: "olamideoredola@gmail.com",
          first_name: "Olamide",
          last_name: "Oredola",
          password: "nopassword",
          is_admin: true,
        },
        {
          // id: 3,
          email: "gabe@gmail.com",
          first_name: "Gabe",
          last_name: "Oredola",
          password: "nopassword",
          is_admin: true,
        },
      ]);
    });
};
