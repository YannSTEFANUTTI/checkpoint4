import axios from "axios";
import { useState } from "react";
import resto01 from "../../assets/img/resto01.png";
import "./cardCreate.css";

function CardCreate() {
  const [restaurant, setRestaurant] = useState({
    name: "",
    address: "",
    resume: "",
    note: "",
    phone: "",
    city_id: "",
  });
  const handleChange = (event) => {
    setRestaurant({ ...restaurant, [event.target.name]: event.target.value });
  };

  console.warn(restaurant, "RESTAURANT");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/restaurants", {
        name: restaurant.name,
        address: restaurant.address,
        resume: restaurant.resume,
        phone: restaurant.phone,
        note: restaurant.note,
        city_id: restaurant.city_id,
      })
      .then((response) => {
        console.warn(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="cardCreateContainer">
      <div className="cardCreate">
        <form key={restaurant.id}>
          <div className="pictoFlex">
            <img
              src={resto01}
              alt="Picto Restaurant"
              className="pictoRestoCreate"
            />
          </div>
          <div className="cardTextCreate">
            <h2 className="nameCreate">
              NOM :
              <input
                type="text"
                name="name"
                value={restaurant.name}
                onChange={handleChange}
              />
            </h2>
            <div className="detailsBlocksCreate">
              <h3>ADRESSE</h3>
              <input
                className="inputAddress"
                type="text"
                name="address"
                value={restaurant.address}
                onChange={handleChange}
              />
              <p>
                <select
                  className="inputCity"
                  name="city_id"
                  onChange={handleChange}
                >
                  <option value="1">Narbonne</option>
                  <option value="2">Paris</option>
                </select>
              </p>
            </div>
            <div className="detailsBlocksCreate">
              <h3>TELEPHONE</h3>
              <input
                type="text"
                name="phone"
                value={restaurant.phone}
                onChange={handleChange}
              />
            </div>
            <div className="detailsBlocksCreate resumeCreate">
              <h3>DESCRIPTIF</h3>
              <textarea
                type="text"
                name="resume"
                value={restaurant.resume}
                onChange={handleChange}
              />
            </div>
            <div className="noteCreate">
              <h3>
                NOTE
                <input
                  type="number"
                  name="note"
                  value={restaurant.note}
                  onChange={handleChange}
                />
                /20
              </h3>
            </div>
          </div>
          <button type="submit" onClick={handleSubmit}>
            Créer restaurant
          </button>
        </form>
      </div>
    </div>
  );
}

export default CardCreate;
