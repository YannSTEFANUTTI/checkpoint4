/* eslint-disable camelcase */
const restaurantModel = require("../models/restaurantModel");

const restaurantController = {
  getAllRestaurants: (_, res) => {
    restaurantModel
      .getRestaurants()
      .then(([restos]) => res.send(restos))
      .catch((err) => res.status(500).send(err));
  },
  getRestaurantById: (req, res) => {
    const { id } = req.params;
    restaurantModel
      .getRestaurantsById(id)
      .then(([resto]) => res.send(resto))
      .catch((err) => res.status(500).send(err));
  },
  getRestaurantByCity: (req, res) => {
    const { city } = req.params;
    restaurantModel
      .getRestaurantsByCity(city)
      .then(([restos]) => res.send(restos))
      .catch((err) => res.status(500).send(err));
  },
  getRestaurantsByCityId: (req, res) => {
    const { cityId } = req.params;
    restaurantModel
      .getRestaurantsByCityId(cityId)
      .then(([restos]) => res.send(restos))
      .catch((err) => res.status(500).send(err));
  },
  editRestaurant: (req, res) => {
    const { id } = req.params;
    const { name, image, address, resume, phone, note } = req.body;
    console.warn(req.body);
    console.warn(req.params);
    restaurantModel
      .editRestaurant(id, name, image, address, resume, phone, note)
      .then((result) => {
        if (result.affectedRows !== 1) {
          return res.status(404).send(`Restaurant ${id} not found`);
        }
        return res.status(200).send({ message: `Restaurant ${id} modified` });
      })
      .catch((err) => res.status(500).send(err));
  },
  addRestaurant: (req, res) => {
    const { name, image, address, resume, phone, note, city_id } = req.body;
    restaurantModel
      .addRestaurant(name, image, address, resume, phone, note, city_id)
      .then(() => res.send("Restaurant added"))
      .catch((err) => res.status(500).send(err));
  },
  deleteRestaurant: (req, res) => {
    const { id } = req.params;
    restaurantModel
      .deleteRestaurant(id)
      .then(() => res.send("Restaurant deleted"))
      .catch((err) => res.status(500).send(err));
  },
};

module.exports = restaurantController;
