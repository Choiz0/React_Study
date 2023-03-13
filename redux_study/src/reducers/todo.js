//actions
 const ADD = 'add';
 const REMOVE ='remove';
const UPDATE= 'update';

//action creators
export const addTodo = (todo)=>{
    return {
        type: ADD,
        todo:{
         
            content: todo.content,
            completed:todo.isComplete
        
            
        }
    }
}
export const removeTodo = (id)=>{
    return {
        type: REMOVE,
        id: id
    }
}
export const updateTodo = (id, isComplete) => {
    return {
      type: UPDATE,
      id: id,
      isComplete: isComplete,
    };
  };
  

//reducer
const initialState = {
    todos: []
  };
  
  export default function todoReducer(state = initialState, action) {
    switch (action.type) {
      case ADD:
        return {
          ...state,
          todos: [...state.todos, action.todo]
        };
      case REMOVE:
        return {
          ...state,
          todos: state.todos.filter((todo) => {
            return todo.id !== action.id;
          })
        };
        case UPDATE:
            return {
              ...state,
              todos: state.todos.map((todo) => {
                if (todo.id === action.id) {
                  return {
                    ...todo,
                    isComplete: action.isComplete,
                  };
                } else {
                  return todo;
                }
              }),
            };
           default:
              return state || initialState;
    }
  }
