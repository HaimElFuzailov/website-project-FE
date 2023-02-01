import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvide";

function Subtotal() {
  const getCartTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <p>
            Subtotal({basket.length} items) : <strong>{`${value}`}</strong>
          </p>
        )}
        decimalScale={2}
        value={getCartTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Subtotal;
