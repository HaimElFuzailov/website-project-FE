import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { useStateValue } from "./StateProvide";


function CardItem(props) {
  const [{ basket }, dispatch] = useStateValue();
  const [{ paket }, change] = useStateValue();
  
  

  const addToOrderList = () => {
    dispatch({
      type: "ADD_TO_ORDER_LIST",
      item: {
        id: props.id,
        img: props.img,
        available: props.available - 1,
        price: props.price,
        title: props.title,
      },
    });
  };
  
  const addToFavoriteList = () => {
    change({
      type: "ADD_TO_FAVORITE_LIST",
      item: {
        id: props.id,
        img: props.img,
        available: props.available -1,
        price: props.price,
        title: props.title,
      },
    });
  };


  
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link">
          <figure className="cards__item__pic-wrap">
            <img
              className="cards__item__img"
              alt="items "
              src={props.img}
            />
            <p className="available"><strong>{props.available}</strong><small> In Stock</small> </p>
            <p className="price">
              <small>$</small>
              <strong>{props.price}</strong>
            </p>

            <button className="btn-order" onClick={addToOrderList}>
              <AiOutlineShoppingCart />
            </button>

            <button className="btn-favorite" onClick={addToFavoriteList}>
              <AiFillHeart />
            </button>
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.title}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
