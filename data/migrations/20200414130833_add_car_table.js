exports.up = function(knex) {
  return knex.schema.createTable("cars", function(cars) {
      cars.increments();
      cars
          .string("VIN", 128)
          .notNullable()
          .unique();
      cars.string("make",128).notNullable()
      cars.string("model",128).notNullable()
      cars.integer("year");
      cars.integer("mileage").notNullable()
      cars.string("transmission",128)
      cars.string("title_status")
      
  });
};
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};