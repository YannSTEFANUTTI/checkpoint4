import { createContext, useContext, useState } from "react";
import propTypes from "prop-types";

const RestaurantContext = createContext();

function RestaurantContextProvider({ children }) {
  const { Provider } = RestaurantContext;
  const [CardCreateVisible, setCardCreateVisible] = useState(false);

  const switchCreate = () => {
    setCardCreateVisible(!CardCreateVisible);
  };

  return (
    <Provider value={{ CardCreateVisible, switchCreate }}>{children}</Provider>
  );
}

export const useRestaurantContext = () => useContext(RestaurantContext);
export default RestaurantContextProvider;

RestaurantContextProvider.propTypes = {
  children: propTypes.element.isRequired,
};
