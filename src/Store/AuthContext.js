import { useReducer, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const ShopContext = createContext();

const INITIAL_STATE = {
  cart: [],
  totalPrice: 0,
  count: 0,
};

export const ACTIONS = {
  ADD_TO_CART: "add-to-cart",
  REMOVE_FROM_CART: "remove-from-cart",
  UPDATE_PRICE: "update-price",
};


const reducer = (INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_TO_CART:
      return {
        ...INITIAL_STATE,
        cart: [
          ...INITIAL_STATE.cart,
          { ...payload.currItem, id: Math.random() },
        ],
        totalPrice: INITIAL_STATE.totalPrice + payload.total,
        count: INITIAL_STATE.count++,
      };
    default:
      console.log(`you didnt code this ${type} `);
  }
};

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const [input, setInput] = useState("");
  const value = { state, dispatch, input, setInput };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export const useShop = () => {
  return useContext(ShopContext);
};
