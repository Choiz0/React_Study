import { useTodostore } from "../store/todoStore";
import { useState, useRef } from "react";

const Todo = () => {

  const [todoText, setTodoText] = useState("");
  const { todos, addTodo, removeTodo, completeTodo } = useTodostore();

  const handleClick = () => {
    addTodo(todoText);

    setTodoText("");
  };


  return (
    <div className="todo">
      <div id="myDIV" className="header">
        <h2 style={{textAlign:"center"}}>My To Do List</h2>
        <input 
          type="text"
          style={{width:"200px", margin:"10px",padding:"5px",}}
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button onClick={handleClick} className="addBtn">
          Add
        </button>
      </div>

      <div id="myUL">
        {Object.values(todos).map((todo)=> 
            <div key={todo.id} className="checked">
            <input type="checkbox" 
         
              checked={todo.isComplted}
              onChange={(e) => completeTodo(todo.id, e.target.checked)}/> 

<p className="inputText" 
   style={{ textDecoration: todo.isComplete ? "line-through" : "none" }}>
   {todo.text}
</p>
              <button onClick={()=> removeTodo(todo.id)}>Delete</button>
          </div>
        )}
    
      </div>
    </div>
  );
};

export default Todo;
