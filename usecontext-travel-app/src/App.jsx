import React,{ useEffect, useState, createContext } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Order from './pages/Order';
import Summary from './pages/Summary';
import Complete from './pages/Complete';

export const OrderContext = createContext(null);

function App() {
 
  const [order, setOrder] = useState({
    products: [],
    productTotal: 0,
    options: [],
    optionTotal: 0,
    totalPrice: 0
  });

  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      <div>
        <Routes>
          <Route path="/" element={<Order />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/complete" element={<Complete />} />
        </Routes>
      </div>
    </OrderContext.Provider>
  );
}

export default App;
