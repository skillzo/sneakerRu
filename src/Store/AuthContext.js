import { useReducer, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const ShopContext = createContext();

const watchListFromLocalStrorage = JSON.parse(
  localStorage.getItem("watchlist") || "[]"
);
const cartFromLocalStrorage = JSON.parse(localStorage.getItem("cart") || "[]");
const totalFromLocalStrorage = JSON.parse(localStorage.getItem("total") || 0);
const INITIAL_STATE = {
  cart: cartFromLocalStrorage,
  watchList: watchListFromLocalStrorage,
  totalPrice: totalFromLocalStrorage,
};

export const ACTIONS = {
  ADD_TO_CART: "add-to-cart",
  REMOVE_FROM_CART: "remove-from-cart",
  ADD_TO_WATCHLIST: "add-to-watchlist",
  REMOVE_FROM_WATCHLIST: "remove-from-watchlist",
};

const reducer = (INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_TO_CART:
      return {
        ...INITIAL_STATE,
        cart: [
          ...INITIAL_STATE.cart,
          { ...payload.currItem, count: 1, size: 39 },
        ],
        totalPrice: INITIAL_STATE.totalPrice + payload.total,
      };
    case ACTIONS.REMOVE_FROM_CART:
      return {
        ...INITIAL_STATE,
        cart: INITIAL_STATE.cart.filter((product) => {
          return product.id !== payload.currItem;
        }),
        totalPrice: INITIAL_STATE.totalPrice - payload.total,
      };
    case ACTIONS.ADD_TO_WATCHLIST:
      return {
        ...INITIAL_STATE,
        watchList: [...INITIAL_STATE.watchList, { ...payload.currItem }],
      };
    case ACTIONS.REMOVE_FROM_WATCHLIST:
      return {
        ...INITIAL_STATE,
        watchList: INITIAL_STATE.watchList.filter((product) => {
          return product.id !== payload.id;
        }),
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
