const restaurantRouter = require("express").Router();
const restaurantController = require("../controllers/restaurantController");

restaurantRouter.get("/restaurants", restaurantController.getAllRestaurants);
restaurantRouter.get(
  "/restaurants/:id",
  restaurantController.getRestaurantById
);
restaurantRouter.get(
  "/restaurants/city/:city",
  restaurantController.getRestaurantByCity
);
restaurantRouter.get(
  "/restaurants/cityid/:cityId",
  restaurantController.getRestaurantsByCityId
);
restaurantRouter.put("/restaurants/:id", restaurantController.editRestaurant);
restaurantRouter.post("/restaurants", restaurantController.addRestaurant);
restaurantRouter.delete(
  "/restaurants/:id",
  restaurantController.deleteRestaurant
);
restaurantRouter.get("/cities", restaurantController.getCities);

module.exports = restaurantRouter;
