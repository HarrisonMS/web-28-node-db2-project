const faker = require('faker')
const dataLength = 50

exports.seed = function (knex, Promise) {
  return knex('cars').del()
    .then(function () {
      const cars = []
      for (let index = 0; index < dataLength; index++) {
        cars.push({
          VIN: faker.random.uuid(),
          make: faker.name.firstName(),
          model: faker.random.number(),
          year: faker.random.number(),
          mileage: faker.random.number(),
          transmission: faker.database.type(),
          title_status: faker.lorem.word()

        })
      }
      return knex('cars').insert(cars)
    });
};
