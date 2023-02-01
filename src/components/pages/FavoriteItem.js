import React from "react";
import "../../App.css";
import { useStateValue } from "../StateProvide";
import CardFav from "../CardFav";

export default function FavoriteItem() {
 
  const [{ paket }, change] = useStateValue();
 

  return (
    <>
      <h1 className="favorite_items">Favorite Item</h1>
      <div className="favorite">
        <div className="checkout">
          {paket.length === 0 ? (
            <div>
              <h2 className="checkout_titel2">Your favorite list is empty.</h2>
            </div>
          ) : (
            <div>
              <h2 className="checkout_titel">Favorite Items:</h2>
              {paket.map((item) => (
                <CardFav
                  id={item.id}
                  title={item.title}
                  img={item.img}
                  price={item.price}
                />
              ))}
              
            </div>
          )}
        </div>
      </div>
    </>
  );
}
