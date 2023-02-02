/* eslint-disable camelcase */
import PropTypes from "prop-types";
import axios from "axios";
import { useRestaurantContext } from "../../contexts/RestaurantContext";
import resto01 from "../../assets/img/resto01.png";
import "./cardModel.css";

function CardModel({
  name,
  address,
  city,
  phone,
  resume,
  note,
  RestoId,
  city_id,
}) {
  const { switchEdit, setCardEditData } = useRestaurantContext();

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/restaurants/${id}`)
      .then((response) => {
        console.warn(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const setData = () => {
    setCardEditData({
      name,
      address,
      city,
      phone,
      resume,
      note,
      RestoId,
      city_id,
    });
    switchEdit();
  };

  return (
    <div>
      <div className="cardModel">
        <div className="closeCrossCreateFlex">
          <div
            className="closeCrossCreate"
            onClick={setData}
            role="presentation"
          >
            C
          </div>
          <div
            className="closeCrossCreate"
            onClick={() => handleDelete(RestoId)}
            role="presentation"
          >
            X
          </div>
        </div>
        <img src={resto01} alt="Picto Restaurant" className="pictoResto" />
        <div className="cardText">
          <h2 className="name">{name}</h2>
          <div className="detailsBlocks">
            <h3>ADRESSE</h3>
            <p>
              {address} <p>{city}</p>
            </p>
          </div>
          <div className="detailsBlocks">
            <h3>TELEPHONE</h3>
            <p>{phone}</p>
          </div>
          <div className="detailsBlocks resume">
            <h3>MON AVIS</h3>
            <p>{resume}</p>
          </div>
          <div className="note">
            <h3>{note}/20</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

CardModel.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  resume: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
  RestoId: PropTypes.string.isRequired,
  city_id: PropTypes.string.isRequired,
};

export default CardModel;
