import React, { useContext } from "react";
import { DiaryStateContext } from "../App";
import DiaryItem from "./DiaryItem";

const DiaryList = () => {
  const { data } = useContext(DiaryStateContext);
  return (
    <div className="diaryList">
      <h3>diary : {data.length}</h3>
      <div>
        {data.map((it, idx) => (
          <DiaryItem key={`diaryitem_${it.id}`} {...it} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
