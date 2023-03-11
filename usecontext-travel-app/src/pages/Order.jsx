import React from "react";
import Products from "../components/Products"
import Options from "../components/Options";
import { useState, useContext ,useEffect } from "react";
import { OrderContext } from "../App";
import {useNavigate} from "react-router-dom";


const Order = () => {
  const navigate = useNavigate();
  const { order, setOrder } = useContext(OrderContext);
 const [total, setTotal] = useState(0);

 useEffect(() => {
  const productTotal = Object.values(order.products).reduce((a, b) => Number(a) + Number(b), 0) * 100;
  const optionTotal = Object.values(order.options).length * 5;
  setOrder(order => ({ ...order, productTotal, optionTotal, totalPrice: productTotal + optionTotal }));
  setTotal(productTotal + optionTotal);

}, [order.products, order.options]);


  
  return (
 
    <div className="order_container">
      <div className="order_header">
        <h2>Travel Product</h2>
      </div>
      <div className="order_main">
     
          <Products />
      
      </div>
      <div className="order_bottom">
        <div className="options">
          <Options/>
        </div>
        <div className="totalPrice">
          <h1>Total Price:{total}</h1>
          <button className="checkout" onClick={()=>{navigate("/summary")}}>order</button>
        </div>
      </div>
    </div>
    
  );
};

export default Order;
