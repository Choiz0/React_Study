import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DiaryItem from "./DiaryItem";
import MyButton from "./MyButton";

const sortOptionList = [
  { value: "latest", name: "latest" },
  { value: "oldest", name: "oldest" },
];
const filterOptionList = [
  { value: "all", name: "all" },
  { value: "good", name: "good" },
  { value: "bad", name: "bad" },
];

const ControlMenu = React.memo(({ value, onChange, optionList }) => {
  
  return (
    <select value={value} className="ControlMenu" onChange={(e) => onChange(e.target.value)}>
      {optionList.map((it, i) => (
        <option key={i}>{it.name}</option>
      ))}
    </select>
  );
});

const DiaryList = ({ diaryList }) => {
  const navigate = useNavigate();

  const filterCallBack = (item) => {
    if (filter === "good") {
      return parseInt(item.emotion) <= 3;
    } else {
      return parseInt(item.emotion) > 3;
    }
  };
  const [filter, setFilter] = useState("all");
  const [sortType, setSortType] = useState("latest");
  const getProcessedDiaryList = () => {
    const compare = (a, b) => {
      if (sortType === "latest") {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    };
    const copyList = JSON.parse(JSON.stringify(diaryList));

    const filteredList =
      filter === "all" ? copyList : copyList.filter((it) => filterCallBack(it));
    const sortedList = filteredList.sort(compare);
    return sortedList;
  };

  return (
    <div className="DiaryList">
      <div className="menu_wrapper">
        <div className="left_col">
          <ControlMenu
            value={sortType}
            onChange={setSortType}
            optionList={sortOptionList}
          />

          <ControlMenu
            value={filter}
            onChange={setFilter}
            optionList={filterOptionList}
          />
        </div>
        <div className="right_col">
          <MyButton
            type={"positive"}
            text="New Diary"
            onClick={() => navigate("/new")}
          />
        </div>
      </div>

      {getProcessedDiaryList().map((it) => (
       <DiaryItem key={it.id} {...it}/>
      ))}
    </div>
  );
};
DiaryList.defaultProps = {
  diaryList: [],
};
export default DiaryList;
