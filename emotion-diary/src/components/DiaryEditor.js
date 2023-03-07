import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyHeader from "./MyHeader";
import MyButton from "./MyButton";



const getStringDate= (date)=>{
    return date.toISOString().slice(0,10);
}
const DiaryEditor = () => {
  const navigate = useNavigate();
  const [date,setDate]= useState(getStringDate(new Date()))

  return (
    <div className="DiaryEditor">
     
        <MyHeader
          headText="New Diary"
          leftChild={<MyButton text=" < Back" 
          onClick={() => navigate(-1)} />}
        />
    
      <section>
        <h4>Date</h4>
        <div className="input_box">
            <input
            className="input_date"
            value={date}
            onChange={(e)=>setDate(e.target.value)}
            type="date"
            />
        </div>
      </section>
    </div>
  );
};

export default DiaryEditor;
