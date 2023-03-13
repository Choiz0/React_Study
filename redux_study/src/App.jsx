import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {decrease, increase} from "./reducers/counter"
import {addTodo,removeTodo,updateTodo} from "./reducers/todo"
import './App.css'

function App() {
  const count = useSelector(state => state.count)
  const {todos} = useSelector(state => state.todos)

  const dispatch = useDispatch();
  const [text, setText] = useState('')
  const [isChecked, setIsChecked] = useState(false); 

 
  const handleAddTodo = () => {
    dispatch(addTodo({
      content: text,
      isComplete: isChecked 
    }));
    setText("");
  };
 
  console.log(todos)

  return (
    <div className="App">
      <div className="card">
        <h1>{count}</h1>
        <button onClick={() => dispatch(increase())}>+</button>
        <button onClick={() => dispatch(decrease())}>-</button>
        <div>
          <h1>Todo</h1>
          {/* use isChecked state variable to set the checked state of the checkbox */}
          <input type="text" onChange={(e) => { setText(e.target.value) }} value={text} />
          <button onClick={handleAddTodo}>ADD</button>
          {Array.isArray(todos) && todos.map((todo) => (
            <div key={todo.id} className="todo">
          <input type="checkbox" checked={todo.isComplete} onChange={() => handleTodoCheck(todo.id)} />
              <p>{todo.content}</p>
              <button onClick={() => dispatch(removeTodo(todo.id))}>REMOVE</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;