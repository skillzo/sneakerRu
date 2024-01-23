import { useEffect, useReducer, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import toast from "react-hot-toast";

const ShopContext = createContext();

const init = JSON.parse(sessionStorage.getItem("sneaker_RU")) || {};

const INITIAL_STATE = {
  cart: init.cart || [],
  watchList: init.watchList || [],
  totalPrice: init.totalPrice || 0,
};

export const ACTIONS = {
  ADD_TO_CART: "add-to-cart",
  REMOVE_FROM_CART: "remove-from-cart",
  ADD_TO_WATCHLIST: "add-to-watchlist",
  REMOVE_FROM_WATCHLIST: "remove-from-watchlist",
  CLEAR_CART: "clear-cart",
};

// return {
//   ...INITIAL_STATE,
//   watchList: [...INITIAL_STATE.watchList, { ...payload.currItem }],
// };

const reducer = (INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_TO_CART:
      const newItem = { ...payload.currItem, count: 1, size: 39 };
      const isInCart = INITIAL_STATE.cart.find(
        (item) => item.id === newItem.id
      );

      if (isInCart) {
        return {
          ...INITIAL_STATE,
          cart: INITIAL_STATE.cart.map((item) => {
            if (item.id === newItem.id) {
              return {
                ...item,
                count: item.count + 1,
              };
            }
            return item;
          }),
          totalPrice: INITIAL_STATE.totalPrice + payload.total,
        };
      } else {
        return {
          ...INITIAL_STATE,
          cart: [...INITIAL_STATE.cart, newItem],
          totalPrice: INITIAL_STATE.totalPrice + payload.total,
        };
      }

    case ACTIONS.REMOVE_FROM_CART:
      const toBeRemoved = INITIAL_STATE.cart.find(
        (item) => item.id === payload?.currItem.id
      );
      const updatedCart = INITIAL_STATE.cart.filter(
        (item) => item.id !== payload?.currItem.id
      );

      if (toBeRemoved.count > 1) {
        return {
          ...INITIAL_STATE,
          cart: INITIAL_STATE.cart.map((item) => {
            if (item.id === toBeRemoved.id) {
              return {
                ...item,
                count: item.count - 1,
              };
            }
            return item;
          }),
          totalPrice: INITIAL_STATE.totalPrice - payload.total,
        };
      } else {
        toast.success(`${payload.currItem.name} from  your  cart`);
        return {
          ...INITIAL_STATE,
          cart: updatedCart,
          totalPrice: INITIAL_STATE.totalPrice - payload.total,
        };
      }
    case ACTIONS.ADD_TO_WATCHLIST:
      const itemExist = INITIAL_STATE.watchList.find(
        (item) => item.id === payload.currItem.id
      );

      const updatedWatchList = INITIAL_STATE.watchList.filter(
        (item) => item.id !== payload?.currItem.id
      );

      if (itemExist) {
        return {
          ...INITIAL_STATE,
          watchList: updatedWatchList,
        };
      } else {
        return {
          ...INITIAL_STATE,
          watchList: [...INITIAL_STATE.watchList, { ...payload.currItem }],
        };
      }

    case ACTIONS.REMOVE_FROM_WATCHLIST:
      return {
        ...INITIAL_STATE,
        watchList: INITIAL_STATE.watchList.filter((product) => {
          return product.id !== payload.id;
        }),
      };

    case ACTIONS.CLEAR_CART:
      return {
        ...INITIAL_STATE,
        cart: [],
        totalPrice: 0,
      };

    default:
      toast.error(`An error occured for ${type}`);
  }
};

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const [input, setInput] = useState("");

  useEffect(() => {
    sessionStorage.setItem("sneaker_RU", JSON.stringify(state));
  }, [state]);

  const value = { state, dispatch, input, setInput };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export const useShop = () => {
  return useContext(ShopContext);
};
