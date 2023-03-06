import React, { useRef, useState ,useContext} from "react";
import { DiaryDispatchContext } from "../App";

const DiaryEditor = () => {

  const { onCreate } = useContext(DiaryDispatchContext);
  const [state, setState] = useState({
    author: "",
    content: "",
    feeling: "1",
  });

  const authorRef = useRef();
  const contentRef = useRef();

  const handleState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    if (state.author.length < 3) {
      return authorRef.current.focus();
    }
    if (state.content.length < 5) {
      return contentRef.current.focus();
    }
    setState(prevState => ({
      ...prevState,
      author: "",
      content: "",
      feeling: "1",
    }));
    onCreate(state.author, state.content, state.feeling);
  };

  return (
    <div className="DiaryEditor">
      <h2>Diary</h2>
      <div>
        <label>Author</label>{" "}
        <input
          name="author"
          ref={authorRef}
          value={state.author}
          onChange={handleState}
        />
      </div>
      <div>
        <label>Content</label>{" "}
        <textarea
          name="content"
          ref={contentRef}
          value={state.content}
          onChange={handleState}
        />
      </div>
      <div>
        <label>Feeling</label>{" "}
        <select name="feeling" value={state.feeling} onChange={handleState}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleClick}>Save</button>
      </div>
    </div>
  );
};

export default React.memo(DiaryEditor);