exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          email: "babatundea15@gmail.com",
          first_name: "Babatunde",
          last_name: "Adeniran",
          password: "nopassword",
          is_admin: false,
        },
        {
          email: "olamideoredola@gmail.com",
          first_name: "Olamide",
          last_name: "Oredola",
          password: "nopassword",
          is_admin: true,
        },
        {
          email: "gabe@gmail.com",
          first_name: "Gabe",
          last_name: "Oredola",
          password: "nopassword",
          is_admin: true,
        },
      ]);
    });
};
