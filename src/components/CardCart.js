import React from "react";
import { useStateValue } from "./StateProvide";
import "./CardCart.css";

function CardCart({ id, title, img ,price }) {
  const [{ basket }, dispatch] = useStateValue();

  
  const removeItem = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };
  
  return (
    <div className="card_cart">
      <img className="card_img" src={img}></img>
      <div className="card_info">
        <p className="card_titel">{title}</p>
        <p className="card_price">${price}</p>

        <button onClick={removeItem}>Remove From Cart</button>
      </div>
    </div>
  );
}

export default CardCart;
