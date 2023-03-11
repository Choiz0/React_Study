import React, { useEffect, useState,useContext} from "react";
import axios from "axios";
import { OrderContext } from "../App";
const Options = () => {
  const [isChecked, setIsChecked] = useState([]);
  const [options, setOptions] = useState([]);
  const [optionTotal, setOptionTotal] = useState(0);
 
 
  const { order, setOrder } = useContext(OrderContext);


  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/options");
        setOptions(
          response.data.map((option) => ({ ...option, checked: false }))
        );
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    setOptionTotal(isChecked.length * 5);
    setOrder({...order,options:isChecked,optionTotal:optionTotal});
  },[isChecked])

  function checkValue(e) {
    var value = e.target.value;
    var index = e.target.id;
    let newArray =[];
    if (isChecked.includes(e.target.value)) {
    newArray = isChecked.filter((item) => item !== e.target.value)
   
      return setIsChecked(newArray);
    } else {
    newArray =[...isChecked, e.target.value];
 
      return setIsChecked(newArray);
    }
   
  }

  return (
    <div className="options_container">
      <h1>Options</h1>
      <h2>$5</h2>
      <h2>Option total:{optionTotal} </h2>

      <div className="option_list">
        {options.map((option, i) => (
          <label>
            <input
              type="checkbox"
              onChange={(e) => checkValue(e)}
              key={i}
              value={option.name}
            />
            {option.name}
          </label>
        ))}
      </div>
      
    </div>
  );
};

export default React.memo(Options);
