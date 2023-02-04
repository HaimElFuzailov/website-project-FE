import React from "react";
import { useStateValue } from "./StateProvide";
import "./CardFav.css";

function CardFav({id,title, img, available ,price }) {
  const [{ paket }, change] = useStateValue();
  

  const removeFav = () => {
    change({
      type: "REMOVE_FROM_FAVORITE",
     id: id,
      
    });
  }
  
  return (
    <div className="card_cart">
      <img className="card_img" src={img}></img>
      <div className="card_info">
        <p className="card_titel">{title}</p>
        <p className="card_available"><strong>{available}</strong><small> In Stock</small> </p>
        <p className="card_price">${price}</p>
        <button onClick={removeFav}>Remove From Fav</button>
      </div>
    </div>
  );
}

export default CardFav;

