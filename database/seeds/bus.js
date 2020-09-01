exports.seed = function (knex) {
  return knex("bus")
    .del()
    .then(function () {
      return knex("bus").insert([
        {
          id: 1,
          number_plate: "234-LG",
          manufacturer: "Toyota",
          model: "Hiace",
          year: "2014",
          capacity: 18,
        },
        {
          id: 2,
          number_plate: "235-LG",
          manufacturer: "Toyota",
          model: "Hiace",
          year: "2014",
          capacity: 18,
        },
        {
          id: 3,
          number_plate: "236-LG",
          manufacturer: "Toyota",
          model: "Hiace",
          year: "2014",
          capacity: 18,
        },
        {
          id: 4,
          number_plate: "237-LG",
          manufacturer: "Toyota",
          model: "Hiace",
          year: "2014",
          capacity: 18,
        },
      ]);
    });
};
