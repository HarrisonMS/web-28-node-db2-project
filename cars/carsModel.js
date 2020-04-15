const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  find,
  findById,
  insert,
  update
}
function find() {
  return db('cars')
}

function findById(id) {
  return db('cars').where({ id: Number(id) });
}

function insert(car) {
  return db('cars')
    .insert(car, 'id')
    .then(ids => ({ id: ids[0] }));
}

function update(id, car) {
  return db('cars')
    .where('id', Number(id))
    .update(car);
}