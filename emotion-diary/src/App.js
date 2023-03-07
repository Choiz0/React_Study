import React, { useReducer, useRef } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import New from "./pages/New";
import Diary from "./pages/Diary";
import MyButton from "./components/MyButton";
import MyHeader from "./components/MyHeader";

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return (newState = [action.data]);
    }
    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        it.id === action.targetId ? { ...action.data } : it
      );
      break;
    }
    default:
      return state;
  }

  return newState;
};

const dummy = [
  {id:1,
   emotion:1,
   content: "diary 1",
   date:1678208306875
  },
  {id:2,
    emotion:2,
    content: "diary 2",
    date:1678208306876
   },
   {id:3,
    emotion:3,
    content: "diary 3",
    date:1678208306877
   },

   {id:4,
    emotion:4,
    content: "diary 4",
    date:1678208306878
   },
   {id:5,
    emotion:5,
    content: "diary 5",
    date:1678208306879
   },
   {id:6,
    emotion:5,
    content: "diary 6",
    date:1778208306879
   },
]


function App() {
  const [data, dispatch] = useReducer(reducer, dummy);
  const dataId = useRef(0);

  //Create
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current += 1;
  };

  //remove
  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };
  // EDIT
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{ onCreate, onEdit, onRemove }}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/diary/:id" element={<Diary />} />
              <Route path="/edit" element={<Edit />} />
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
