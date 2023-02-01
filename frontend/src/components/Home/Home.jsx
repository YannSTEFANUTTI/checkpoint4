/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from "react";
import "./home.css";
import axios from "axios";
import allFood from "../../assets/img/allFood.png";
import logo01 from "../../assets/img/logo01.png";
import CardModel from "../cardModel/CardModel";
import CardCreate from "../cardCreate/cardCreate";
import { useRestaurantContext } from "../../contexts/RestaurantContext";

function Home() {
  const { CardCreateVisible, switchCreate } = useRestaurantContext();
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/restaurants").then((response) => {
      setRestaurants(response.data);
    });
  }, []);

  console.warn(restaurants, "RESTAOOOOOO");

  return (
    <div className="home">
      <img src={allFood} alt="allFood" className="allFood" />
      <img src={logo01} alt="logo01" className="logo01" />
      {CardCreateVisible && <CardCreate />}
      <div
        className="openCreateFlex"
        onClick={switchCreate}
        role="presentation"
      >
        <div className="openCreate">
          Nouveau <br /> Restaurant
        </div>
      </div>
      <div className="cardsContainer">
        {restaurants.map((el) => (
          <CardModel
            name={el.name}
            adress={el.address}
            city={el.city}
            phone={el.phone}
            resume={el.resume}
            note={el.note}
            pictoResto="resto01"
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
