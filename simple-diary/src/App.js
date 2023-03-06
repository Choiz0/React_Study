import "./App.css";
import DiaryEditor from "./components/DiaryEditor";
import DiaryList from "./components/DiaryList";
import React, { useEffect, useReducer, useMemo, useCallback } from "react";
import { useRef } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      const date = new Date().toLocaleString();

      const newItem = {
        ...action.data,
        date,
      };
      return [newItem, ...state];
    }
    case "EDIT": {
      return state.map((v) =>
        v.id === action.id ? { ...v, content: action.newContent } : v
      );
    }
    case "REMOVE": {
      return state.filter((v) => v.id !== action.id);
    }
    default:
      return state;
  }
};
export const DiaryStateContext = React.createContext(null);
export const DiaryDispatchContext = React.createContext(null);
function App() {
  const [data, dispatch] = useReducer(reducer, []);
  const dataId = useRef(0);

  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());

    const initData = res.slice(0, 20).map((item) => {
      return {
        author: item.email,
        content: item.body,
        feeling: Math.floor(Math.random() * 5) + 1,
        date: new Date().toLocaleString(),
        id: dataId.current++,
      };
    });
    dispatch({ type: "INIT", data: initData });
  };
  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 1500);
  }, []);

  const getDiaryAnalysis = useMemo(() => {
    if (!data || data.length === 0) {
      return { goodCount: 0, badCount: 0, goodRatio: 0 };
    }

    const goodCount = data.filter((v) => v.feeling >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100;
    return { goodCount, badCount, goodRatio };
  }, [data.length]);

  const { goodCount, badCount, goodRatio } = getDiaryAnalysis;

  const onCreate = useCallback((author, content, feeling) => {
    dispatch({
      type: "CREATE",
      data: { author, content, feeling, id: dataId.current },
    });
    dataId.current += 1;
  }, []);

  const onDelete = useCallback((id) => {
    dispatch({ type: "REMOVE", id });
  }, []);

  const onEdit = useCallback((id, newContent) => {
    dispatch({ type: "EDIT", id, newContent });
  }, []);
  const store = {
    data,
  };

  const memoizedDispatches = useMemo(() => {
    return { onCreate, onDelete, onEdit };
  }, []);

  return (
    <DiaryStateContext.Provider value={store}>
      <DiaryDispatchContext.Provider value={memoizedDispatches}>
        <div>
          <DiaryEditor onCreate={onCreate} />
          <div>total diary :{data.length} </div>
          <div>Good Feeling Diary :{goodCount}</div>
          <div>Bad Feeling Diary :{badCount}</div>
          <div>Good Feeling Ratio :{goodRatio}</div>

          <DiaryList onDelete={onDelete} onEdit={onEdit} />
        </div>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
