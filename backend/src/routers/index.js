const express = require("express");
const restaurantController = require("../controllers/restaurantController");

const router = express.Router();

router.get("/restaurants", restaurantController.getAllRestaurants);
router.get("/restaurants/:id", restaurantController.getRestaurantById);
router.get("/restaurants/city/:city", restaurantController.getRestaurantByCity);
router.get(
  "/restaurants/city/id/:cityId",
  restaurantController.getRestaurantsByCityId
);
router.put("/restaurants/:id", restaurantController.editRestaurant);
router.post("/restaurants", restaurantController.addRestaurant);
router.delete("/restaurants/:id", restaurantController.deleteRestaurant);

// router.use("/user", userRouter);

module.exports = router;
