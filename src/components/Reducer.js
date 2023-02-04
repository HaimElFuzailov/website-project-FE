

export const initialState = {
  basket: [],
  paket: [],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_ORDER_LIST":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "ADD_TO_FAVORITE_LIST":
      return {
        ...state,
        paket: [...state.paket, action.item],
      };
    case "REMOVE_FROM_CART":
      let newcart = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newcart.splice(index, 1);
      } else {
        console.log("There were errors while removing item from cart");
      }
      return { ...state, basket: newcart };

      case "REMOVE_FROM_FAVORITE":
      let newfav = [...state.paket];
      const i = state.paket.findIndex(
        (paketItem) => paketItem.id === action.id
      );
      if (i >= 0) {
        newfav.splice(i, 1);
      } else {
        console.log("There were errors while removing item from cart");
      }
      return { ...state, paket: newfav };
  }
};


export default reducer;
