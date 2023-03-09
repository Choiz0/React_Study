import React, { useState,useRef,useContext, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MyHeader from "./MyHeader";
import MyButton from "./MyButton";
import EmotionItem from "./EmotionItem";
import { DiaryDispatchContext } from "../App";
import {getStringDate} from "../util/date"
import {emotionList} from "../util/emotion"





const DiaryEditor = ({isEdit, originData}) => {
  const {onCreate,onEdit,onRemove} =useContext(DiaryDispatchContext)
  const contentRef = useRef();
  const [content, setContent] = useState("")
  const [emotion,setEmotion] = useState(3)
  const navigate = useNavigate();
  const [date,setDate]= useState([getStringDate(new Date())])

  const handleClickEmote = useCallback((emotion)=>{
    setEmotion(emotion)
  },[])

  const handleSubmit =()=>{
    if(content.length <1){
      contentRef.current.focus();
      return
    }
    

    if(window.confirm(isEdit? "Do you want edit the diary?" : "Do you want to save new diary?"))
    {
      if(!isEdit){
        onCreate(date,content,emotion)
      }
      else{
        onEdit(originData.id, date, content, emotion)
      }
    }
    
    navigate("/", {replace:true})
  }
  const handleRemove=() =>{
    if(window.confirm("Do you want to remove the diary?")) {
      onRemove(originData.id);
      navigate('/',{replace:true})
    }
  }

  useEffect(()=>{
    if(isEdit){
      setDate(getStringDate(new Date(parseInt(originData.date))))
      setEmotion(originData.emotion)
      setContent(originData.content)
    }
  },[isEdit,originData])
  return (
    <div className="DiaryEditor">
     
        <MyHeader
          headText={isEdit ?"Edit Diary":"New Diary"}
          leftChild={<MyButton text=" < Back" 
          onClick={() => navigate(-1)} />}
          rightChild={
            isEdit && (
              <MyButton text={"Remove"} type={"negative"} onClick={handleRemove}/>
            )
          }
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
      <section>
        <h4> Today's Feeling</h4>
        <div className="input_box emotion_list_wrapper">
          {emotionList.map((it)=>(
            <EmotionItem key={it.emotion_id} 
            {...it}
            onClick = {handleClickEmote}
            isSelected ={it.emotion_id === emotion}
            />
          ))}
          </div> 
      </section>
      <section>
        <h4>Story</h4>
        <div className="input_box text_wrapper">
          <textarea
          ref={contentRef}
          value={content}
          onChange={(e)=> (setContent(e.target.value))}

          />
        </div>
      </section>
      <section>
      <div className="control_box">
        <MyButton text={"Cancel"} onClick={()=> navigate(-1)}/>
        <MyButton text={"Save"} type={"positive"}  onClick={handleSubmit}/>
      </div>
    </section>
    </div>
  
  );
};

export default DiaryEditor;
