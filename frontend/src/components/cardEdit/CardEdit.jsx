/* eslint-disable import/no-unresolved */
import axios from "axios";
import { useState } from "react";
import Proptypes from "prop-types";
import { useRestaurantContext } from "../../contexts/RestaurantContext";
import resto01 from "../../assets/img/resto01.png";
import "./cardEdit.css";

function CardEdit({ CardEditData }) {
  const { switchEdit } = useRestaurantContext();
  const [restaurant, setRestaurant] = useState({
    name: CardEditData.name,
    address: CardEditData.address,
    resume: CardEditData.resume,
    note: CardEditData.note,
    phone: CardEditData.phone,
    city_id: CardEditData.city_id,
    id: CardEditData.RestoId,
  });
  const handleChange = (event) => {
    setRestaurant({ ...restaurant, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:5000/restaurants/${restaurant.id}`, {
        name: restaurant.name,
        image: 1,
        address: restaurant.address,
        resume: restaurant.resume,
        phone: restaurant.phone,
        note: restaurant.note,
        city_id: restaurant.city_id,
        id: restaurant.id,
      })
      .then((response) => {
        console.warn(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="cardEditContainer">
      <div className="cardEdit">
        <form key={restaurant.id}>
          <div className="closeCrossEditFlex">
            <div
              className="closeCrossEdit"
              onClick={switchEdit}
              role="presentation"
            >
              X
            </div>
          </div>

          <div className="pictoFlex">
            <img
              src={resto01}
              alt="Picto Restaurant"
              className="pictoRestoEdit"
            />
          </div>
          <div className="cardTextEdit">
            <h2 className="nameEdit">
              NOM :
              <input
                type="text"
                name="name"
                placeholder={CardEditData.name}
                onChange={handleChange}
              />
            </h2>
            <div className="detailsBlocksEdit">
              <h3>ADRESSE</h3>
              <input
                className="inputAddress"
                type="text"
                name="address"
                placeholder={CardEditData.address}
                onChange={handleChange}
              />
              <p>
                <select
                  className="inputCity"
                  name="city_id"
                  onChange={handleChange}
                >
                  <option value={CardEditData.city_id}>
                    {CardEditData.city}
                  </option>
                  <option value="1">Narbonne</option>
                  <option value="2">Paris</option>
                  <option value="3">Pessac</option>
                  <option value="4">Bègles</option>
                  <option value="5">Cergy</option>
                </select>
              </p>
            </div>
            <div className="detailsBlocksEdit">
              <h3>TELEPHONE</h3>
              <input
                type="text"
                name="phone"
                placeholder={CardEditData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="detailsBlocksEdit resumeEdit">
              <h3>DESCRIPTIF</h3>
              <textarea
                type="text"
                name="resume"
                placeholder={CardEditData.resume}
                onChange={handleChange}
              />
            </div>
            <div className="noteEdit">
              <h3>
                NOTE
                <input
                  type="number"
                  name="note"
                  placeholder={CardEditData.note}
                  onChange={handleChange}
                />
                /20
              </h3>
            </div>
          </div>
          <button type="submit" onClick={handleSubmit}>
            Editer restaurant
          </button>
        </form>
      </div>
    </div>
  );
}

export default CardEdit;

CardEdit.propTypes = {
  CardEditData: Proptypes.string.isRequired,
};
