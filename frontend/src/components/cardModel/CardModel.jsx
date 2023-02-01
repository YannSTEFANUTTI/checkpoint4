import PropTypes from "prop-types";
import resto01 from "../../assets/img/resto01.png";
import "./cardModel.css";

function CardModel({ name, adress, city, phone, resume, note }) {
  return (
    <div className="cardModel">
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
  );
}

CardModel.propTypes = {
  name: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  resume: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
};

export default CardModel;
