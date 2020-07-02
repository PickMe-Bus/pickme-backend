exports.up = function (knex) {
  return knex.schema
    .createTable("bus", (table) => {
      table.increments("id");
      table.string("number_plate", 255).notNullable();
      table.string("manufacturer", 255).notNullable();
      table.string("model", 255).notNullable();
      table.string("year", 255).notNullable();
      table.integer("capacity").notNullable();
    })
    .createTable("trip", (table) => {
      table.increments("id");
      table
        .integer("bus_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("bus")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table.string("origin", 255).notNullable();
      table.string("destination", 255).notNullable();
      table.date("trip_date").notNullable();
      table.float("fare").notNullable();
      table.float("status").defaultTo(1);
    })
    .createTable("booking", (table) => {
      table.primary(["trip_id", "user_id"]);       //Spec wanted compositte key. This is composite, but how to consume it?
      table
        .integer("trip_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("trip")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table.date("created_on").defaultTo(knex.raw("CURRENT_DATE"));
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("booking")
    .dropTableIfExists("trip")
    .dropTableIfExists("bus");
};
