import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import propTypes from "prop-types";

const RestaurantContext = createContext();

function RestaurantContextProvider({ children }) {
  const { Provider } = RestaurantContext;
  const [CardCreateVisible, setCardCreateVisible] = useState(false);
  const [CardEditVisible, setCardEditVisible] = useState(false);
  const [CardEditData, setCardEditData] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/cities").then((response) => {
      setCities(response.data);
    });
  }, []);

  const switchCreate = () => {
    setCardCreateVisible(!CardCreateVisible);
  };
  const switchEdit = () => {
    setCardEditVisible(!CardEditVisible);
  };

  return (
    <Provider
      value={{
        CardCreateVisible,
        switchCreate,
        CardEditVisible,
        switchEdit,
        CardEditData,
        setCardEditData,
        cities,
      }}
    >
      {children}
    </Provider>
  );
}

export const useRestaurantContext = () => useContext(RestaurantContext);
export default RestaurantContextProvider;

RestaurantContextProvider.propTypes = {
  children: propTypes.element.isRequired,
};
