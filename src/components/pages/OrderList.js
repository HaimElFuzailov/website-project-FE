import React ,{useEffect} from "react";
import "../../App.css";
import { useStateValue } from "../StateProvide";
import Subtotal from "../Subtotal";
import CardCart from "../CardCart";

export default function OrderList() {
  const [{ basket }] = useStateValue();
  

 
  return (
    <>
      <h1 className="order_List">Order List</h1>
      <div className="checkout">
        <div className="checkout_left">
          {basket.length === 0 ? (
            <div>
              <h2 className="checkout_titel1">Your order list is empty.</h2>
              <p >You have no item in your basket, buy one.</p>
            </div>
          ) : (
            <div>
              <h2 className="checkout_titel2">Item In The Order Basket:</h2>
              {basket.map((item,index) => (
                <CardCart
                  key={`${item.id}_${index}`}
                  id={item.id}
                  title={item.title}
                  img={item.img}
                  price={item.price}
                />
              ))}
            </div>
          )}
        </div>
        
        {basket.length > 0 && (
          <div className="checkout_right">
            <Subtotal />
          </div>
        )}
      </div>
    </>
  );
}
