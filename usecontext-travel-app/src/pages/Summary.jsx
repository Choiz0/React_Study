import React, { useContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { OrderContext } from "../App";
import axios from "axios";

const Summary = () => {
  const navigate = useNavigate();
  const { order } = useContext(OrderContext);
  const orderRef = useRef(0);

  let totalPrice = order.totalPrice;
  let orderNum = Math.floor(Math.random() * 1000000);

  const [checked, setChecked] = useState(false);
  const [sendOrder, setSendOrder] = useState({
    id: orderRef.current,
    orderNumber: orderNum,
    orderPrice: totalPrice,
  });

  const checkValue = () => {
    setChecked(!checked);
  };

  const handleSubmit = async () => {
    if (sendOrder !== undefined) {
      orderRef.current++;
      console.log(sendOrder);

      try {
        await axios.post("http://localhost:3000/history", sendOrder, {
          headers: { "content-type": "application/x-www-form-urlencoded" },
        });
        console.log("sent");
        alert("Order Placed Successfully");
        navigate("/complete");
      } catch (error) {
        console.log(error);
        alert(`Error placing order: ${error.response.data}`);
      }
    }
  };
  return (
    <div className="summary-container">
      <div className="inner_wrapper">
        <h1>Order Summary</h1>
        <table className="product-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Qty</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(order.products).map(([product, quantity], i) => (
              <tr key={i}>
                <td>{product}</td>
                <td>{quantity}</td>
                <td>$100</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>Product Total: ${order.productTotal}</p>
        <table className="option-table">
          <thead>
            <tr>
              <th>Option</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(order.options).map((option, i) => (
              <tr key={i}>
                <td>{option}</td>
                <td>$5</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>Option Total: ${order.optionTotal}</p>
        <p>Total Price: ${order.totalPrice}</p>

        <label>
          <input
            type="checkbox"
            onChange={(e) => checkValue(e)}
            checked={checked}
          />
          <span>Check out my order</span>
        </label>

        <button
          disabled={!checked || order.totalPrice <= 0}
          onClick={handleSubmit}
          type="submit"
        >
          Order
        </button>
      </div>
    </div>
  );
};

export default Summary;
