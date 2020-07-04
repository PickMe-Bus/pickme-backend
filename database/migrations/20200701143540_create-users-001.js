exports.up = function (knex) {
  // The up function creates the users table
  return knex.schema.createTable("users", (table) => {
    table.increments(); //Creates column named id. It is our primary key that auto-increments
    table.string("email").notNullable().unique();
    table.string("first_name", 128).notNullable();
    table.string("last_name", 128).notNullable();
    table.string("password", 128).notNullable();
    table.boolean("is_admin").notNullable();
  });
};

exports.down = function (knex) {
  // The down function destroys the users table if it exists. It allows us to move to any state of the database.
  return knex.schema.dropTableIfExists("users");
};
