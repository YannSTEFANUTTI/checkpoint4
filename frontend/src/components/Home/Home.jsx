/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from "react";
import "./home.css";
import axios from "axios";
import allFood from "../../assets/img/allFood.png";
import logo01 from "../../assets/img/logo01.png";
import CardModel from "../cardModel/CardModel";
import CardCreate from "../cardCreate/cardCreate";
import CardEdit from "../cardEdit/CardEdit";
import { useRestaurantContext } from "../../contexts/RestaurantContext";

function Home() {
  const { CardCreateVisible, switchCreate, CardEditVisible, CardEditData } =
    useRestaurantContext();
  const [restaurants, setRestaurants] = useState([]);
  const [city, setCity] = useState("0");
  useEffect(() => {
    axios.get("http://localhost:5000/restaurants").then((response) => {
      setRestaurants(response.data);
    });
  }, [switchCreate]);

  const selectCity = (e) => {
    setCity(e.target.value);
  };
  return (
    <div className="home">
      <img src={allFood} alt="allFood" className="allFood" />
      <img src={logo01} alt="logo01" className="logo01" />
      {CardCreateVisible && <CardCreate />}
      {CardEditVisible && <CardEdit CardEditData={CardEditData} />}
      <select className="cityFilter" name="cityFilter" onChange={selectCity}>
        <option value="0">Ville</option>
        <option value="Narbonne">Narbonne</option>
        <option value="Paris">Paris</option>
        <option value="Pessac">Pessac</option>
        <option value="Bègles">Bègles</option>
        <option value="Cergy">Cergy</option>
      </select>
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
        {restaurants
          .filter((el) => el.city === city || city === "0")
          .map((el) => (
            <CardModel
              name={el.name}
              address={el.address}
              city={el.city}
              phone={el.phone}
              resume={el.resume}
              note={el.note}
              pictoResto="resto01"
              RestoId={el.id}
              city_id={el.city_id}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
