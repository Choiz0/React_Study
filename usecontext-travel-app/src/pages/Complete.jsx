import React from "react";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { OrderContext } from "../App";

const Complete = () => {
  const { order, setOrder } = useContext(OrderContext);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/history");
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  if (!Array.isArray(data)) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className="complete_container">
      <div className="inner_wrapper">
        <h1>Order Completed!!</h1>
        <table>
          <tr>
            <th>order Number</th>
            <th>order Price</th>
          </tr>
          {data &&
            data.map((it) => (
              <tr>
                <td>{it.orderNumber}</td>
                <td>{it.orderPrice}</td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
};

export default Complete;
