/* eslint-disable camelcase */
const connexion = require("../../config");

const db = connexion.promise();

const getRestaurants = () => {
  return db.query(
    "SELECT restaurant.id, name, image, address, resume, phone, note, city  FROM restaurant INNER JOIN city ON restaurant.city_id = city.id"
  );
};

const getRestaurantsById = (id) => {
  return db.query(
    "SELECT restaurant.id, name, image, address, resume, phone, note, city FROM restaurant INNER JOIN city ON restaurant.city_id = city.id WHERE restaurant.id = ?",
    [id]
  );
};

const getRestaurantsByCity = (city) => {
  return db.query(
    "SELECT restaurant.id, name, image, address, resume, phone, note, city FROM restaurant INNER JOIN city ON restaurant.city_id = city.id WHERE city.city = ?",
    [city]
  );
};

const getRestaurantsByCityId = (cityId) => {
  return db.query(
    "SELECT restaurant.id, name, image, address, resume, phone, note, city FROM restaurant INNER JOIN city ON restaurant.city_id = city.id WHERE city.id = ?",
    [cityId]
  );
};

const addRestaurant = (name, image, address, resume, phone, note, city_id) => {
  return db.query(
    "INSERT INTO restaurant (name, image, address, resume, phone, note, city_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [name, image, address, resume, phone, note, city_id]
  );
};

const editRestaurant = (payload, id) => {
  return db
    .query("UPDATE restaurant SET ? WHERE id = ?", [payload, id])
    .then(([result]) => result);
};

const deleteRestaurant = (id) => {
  return db.query("DELETE FROM restaurant WHERE id = ?", [id]);
};

module.exports = {
  getRestaurants,
  getRestaurantsById,
  getRestaurantsByCity,
  getRestaurantsByCityId,
  editRestaurant,
  addRestaurant,
  deleteRestaurant,
};
