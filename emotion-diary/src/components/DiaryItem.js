import React from 'react'
import MyButton from './MyButton';
import { useNavigate } from 'react-router-dom';

const DiaryItem = ({id,emotion,content,date}) => {
    const goDetail =()=>{
        navigate(`/diary/${id}`)
    }
    const navigate = useNavigate();
    const strDate = new Date(parseInt(date)).toLocaleDateString();
  return (
    <div className='DiaryItem'>
    <div className="emotion_img_wrapper" onClick={goDetail}>
        <img src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`} alt={emotion.discript}/>
    </div>
    <div className="info_wrapper" onClick={goDetail}>
        <div className="diary_date">{strDate}</div>
        <div className="diary_content_preview">{content.slice(0,25)}</div>
    </div>
    <div className="btn_wrapper">
        <MyButton text={"Edit"} onClick={()=>navigate(`/edit/${id}`)}/>
    </div>
    </div>
  )
}

export default React.memo(DiaryItem)
