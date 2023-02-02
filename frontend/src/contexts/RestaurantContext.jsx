import { createContext, useContext, useState } from "react";
import propTypes from "prop-types";

const RestaurantContext = createContext();

function RestaurantContextProvider({ children }) {
  const { Provider } = RestaurantContext;
  const [CardCreateVisible, setCardCreateVisible] = useState(false);
  const [CardEditVisible, setCardEditVisible] = useState(false);
  const [CardEditData, setCardEditData] = useState([]);

  const switchCreate = () => {
    setCardCreateVisible(!CardCreateVisible);
  };
  const switchEdit = () => {
    setCardEditVisible(!CardEditVisible);
  };

  console.warn("CardEditVisibbleeeeee", CardEditVisible);

  return (
    <Provider
      value={{
        CardCreateVisible,
        switchCreate,
        CardEditVisible,
        switchEdit,
        CardEditData,
        setCardEditData,
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
