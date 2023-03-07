import React, { useState,useContext,useEffect } from 'react'
import { DiaryStateContext } from '../App';
import DiaryList from '../components/DiaryList';
import MyButton from '../components/MyButton';
import MyHeader from '../components/MyHeader';

const Home = () => {
  const diaryList = useContext(DiaryStateContext);
  const [data,setData] =useState([]);
  
  const [curDate,setCurDate] = useState(new Date());
  
  useEffect(() => {
   if(diaryList.length >= 1){const firstDay = new Date(
    curDate.getFullYear(),
    curDate.getMonth(),
    1
   ).getTime();
   const lastDay = new Date(
    curDate.getFullYear(),
    curDate.getMonth()+1,
    0
   ).getTime();
  
    setData(diaryList.filter((it)=> firstDay <= it.date && lastDay >= it.date))}
  }, [diaryList,curDate])
  
// useEffect(()=>{console.log(data)},[data])


const headText = `${curDate.getMonth()+1} / ${curDate.getFullYear()} `;
const incresedMon = ()=>{
  setCurDate(
    new Date(curDate.getFullYear(),curDate.getMonth()+1,curDate.getDate())
  )
}
const decresedMon = ()=>{
  setCurDate(
    new Date(curDate.getFullYear(),curDate.getMonth()-1,curDate.getDate())
  )
}
  return (
    <>
   <MyHeader headText={headText}
   leftChild={<MyButton text="<" onClick={decresedMon}/>} 
   rightChild={<MyButton text=">" onClick={incresedMon}/>}
  />
   <div><DiaryList diaryList={diaryList}/></div>
   </>
  )
}

export default Home
