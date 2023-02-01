import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { getAllItems } from "../services/api";
import { useStateValue } from "./StateProvide";

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//       const newItemBody = {
//         titleOfTheItem:titleOfTheItem,
//         photoOfTheItem:src,
//         price: price
//       }

//       const response = await getAllItems(newItemBody);

//   } catch (err) {

//   }
// }

function CardItem(props) {
  const [{ basket }, dispatch] = useStateValue();
  const [{ paket }, change] = useStateValue();
  console.log("paket content", paket);
  console.log("basket content", basket);

  const addToOrderList = () => {
    dispatch({
      type: "ADD_TO_ORDER_LIST",
      item: {
        id: props.id,
        img: props.img,
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
