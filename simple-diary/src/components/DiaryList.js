import React from 'react'
import DiaryItem from './DiaryItem'

const DiaryList = ({diaryList,onDelete, onEdit}) => {


  return (
    <div className='diaryList'>
       <h3>diary : {diaryList.length}</h3>
      <div>
        {diaryList.map((item)=> (
          <DiaryItem  key={item.id} item={item} onDelete={onDelete} onEdit={onEdit}/>
        ))
        
        
        }</div>
    </div>
  )
}

export default DiaryList
