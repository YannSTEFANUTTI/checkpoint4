import PropTypes from "prop-types";
import axios from "axios";
import { useRestaurantContext } from "../../contexts/RestaurantContext";
import CardEdit from "../cardEdit/CardEdit";
import resto01 from "../../assets/img/resto01.png";
import "./cardModel.css";

function CardModel({ name, adress, city, phone, resume, note, RestoId }) {
  const { switchEdit, CardEditVisible } = useRestaurantContext();

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

  /*   const handleEdit = (id) => {
    axios
      .put(`http://localhost:5000/restaurants/${id}`)
      .then((response) => {
        console.warn(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }; */

  return (
    <div>
      {CardEditVisible && (
        <CardEdit
          name={name}
          adress={adress}
          city={city}
          phone={phone}
          resume={resume}
          note={note}
          RestoId={RestoId}
        />
      )}
      <div className="cardModel">
        <div className="closeCrossCreateFlex">
          <div
            className="closeCrossCreate"
            onClick={() => handleDelete(RestoId)}
            role="presentation"
          >
            X
          </div>
          <div
            className="closeCrossCreate"
            onClick={switchEdit}
            role="presentation"
          >
            Edit
          </div>
        </div>
        <img src={resto01} alt="Picto Restaurant" className="pictoResto" />
        <div className="cardText">
          <h2 className="name">{name}</h2>
          <div className="detailsBlocks">
            <h3>ADRESS</h3>
            <p>
              {adress} <p>{city}</p>
            </p>
          </div>
          <div className="detailsBlocks">
            <h3>PHONE</h3>
            <p>{phone}</p>
          </div>
          <div className="detailsBlocks resume">
            <h3>RESUME</h3>
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
  adress: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  resume: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
  RestoId: PropTypes.string.isRequired,
};

export default CardModel;
