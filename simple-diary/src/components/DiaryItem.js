import React, { useState, useRef,useEffect, useContext } from "react";
import { DiaryDispatchContext } from "../App";

const DiaryItem = ({ id, author, content, feeling, date }) => {


  const {onDelete, onEdit} = useContext(DiaryDispatchContext)
  const contentRef = useRef();
  const [isEdit, setIsEdit] = useState(false);
  const toggleEdit = () => setIsEdit(!isEdit);
  const [editContent, setEditContent] = useState(content);

  const handleRemove = () => {
    if (window.confirm(`Are you sure you want to delete ${id} item?`)) {
      onDelete(id);
    }
  };
  useEffect(()=>{
    console.log(`${id} render`)
  })
  const handleEdit = () => {
    if (editContent.length < 5) {
      return contentRef.current.focus();
    }
    if (window.confirm(`Are you sure you want to edit ${id} item?`)) {
      onEdit(id, editContent);
      toggleEdit();
    }
  };
  const handleCancel = () => {
    toggleEdit();
    setEditContent(content);
  };

  return (
    <div className="diarycard">
      <p>Author : {author}</p>
      <p>{date}</p>
      <hr />

      {isEdit ? (
        <>
          <textarea
            name="content"
            ref={contentRef}
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
          />
        </>
      ) : (
        <>
          <p> {content}</p>
        </>
      )}

      <p>Feeling : {feeling}</p>
      <div>
        {isEdit ? (
          <>
            <button onClick={handleCancel}>Cancel</button>
            <button onClick={handleEdit}>Save</button>
          </>
        ) : (
          <>
            <button onClick={handleRemove}>Remove</button>
            <button onClick={toggleEdit}>Edit</button>
          </>
        )}
      </div>
    </div>
  );
};

export default React.memo(DiaryItem);
