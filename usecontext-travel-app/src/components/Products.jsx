import React from "react";
import axios from "axios";
import { useEffect, useState,useContext } from "react";
import { OrderContext } from "../App";

const Products = () => {
const { order, setOrder } = useContext(OrderContext);

  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState(0);
  let [totalProduct,setTotalProduct] =useState({});
  const [value,setValue] = useState(0);

  useEffect(() => {
  if(Object.values(totalProduct).length>0  ){
   setPrice(Object.values(totalProduct).map((v)=>Number(v)).reduce((a,c)=>a+c,0))
    setOrder({...order, products:totalProduct, productTotal: price});
  }

   } ,[totalProduct])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/countries");
        setProducts(response.data);
      } catch (error) {
   //     console.log(error);
      }
    };
    
    fetchData();
  }, []);

  const onChangePrice = (e, name, value) => {
    if (Number(value) || value === '') {
      const newTotalProduct = { ...totalProduct };
      if (value === '') {
        delete newTotalProduct[name];
      } else {
        newTotalProduct[name] = value;
      }
      setTotalProduct(newTotalProduct);
    }
  };
  return (
    <div className="product_container">
      <div className="price_showing">
        <h2>Products</h2>
        <p>$100</p>
        <p>products total :{price *100} </p>
      </div>

      <div className="products">
        {products.map((it, idx) => (
          <div className="product" key={idx}>
            <div className="product_img_wrapper">
              <img src={it.imageUrl} alt={it.name} />
            </div>

            <div className="product_price">
              <h4>{it.name}</h4>
              <input type="text" name={it.name}
               value={ totalProduct[it.name]}
               onChange={(e) => onChangePrice(e, it.name, e.target.value)} />
            </div>
          </div>
        ))}
      </div>
        
    </div>
  );
};

export default React.memo(Products);
