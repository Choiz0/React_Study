import React ,{useEffect}from 'react'

import { useNavigate } from 'react-router-dom'
import DiaryEditor from '../components/DiaryEditor';
const New = () => {
  useEffect(()=>{
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = 'New diary';
 
    },[])
   return (
    <div>
      <DiaryEditor/>
    </div>
  )
}

export default New
