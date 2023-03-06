import React, { useState, useRef } from "react";

const DiaryItem = ({ item, onDelete, onEdit }) => {
  const contentRef = useRef();
  const [isEdit, setIsEdit] = useState(false);
  const toggleEdit = () => setIsEdit(!isEdit);
  const [editContent, setEditContent] = useState(item.content);

  const handleRemove = () => {
    if (window.confirm(`Are you sure you want to delete ${item.id} item?`)) {
      onDelete(item.id);
    }
  };

  const handleEdit = () => {
    if (editContent.length < 5) {
      return contentRef.current.focus();
    }
    if (window.confirm(`Are you sure you want to edit ${item.id} item?`)) {
      onEdit(item.id, editContent);
      toggleEdit();
    }
  };
  const handleCancel = () => {
    toggleEdit();
    setEditContent(item.content);
  };

  return (
    <div className="diarycard">
      <p>Author : {item.author}</p>
      <p>{item.date}</p>
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
          <p> {item.content}</p>
        </>
      )}

      <p>Feeling : {item.feeling}</p>
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

export default DiaryItem;
