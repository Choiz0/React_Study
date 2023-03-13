import { create } from 'zustand'
import {persist, devtools} from 'zustand/middleware' 

let todoStore = ((set)=>({
    todos: [],
    addTodo:(todoText)=> set((state)=>(
        {todos:[...state.todos, {text: todoText,id:state.todos.length, isComplete:false}]})),
        removeTodo : (getId)=> set((state)=> ({
            todos: state.todos.filter((todo)=> todo.id!==getId)
        })),
    completeTodo: (getId,isChecked) =>
    set((state) => ({
        todos: state.todos.map((todo) => {
            if (todo.id === getId) {
                return {
                    ...todo,
                    isComplete: isChecked
                }
            }
            return todo;
        })
    }))
 
}) )

todoStore = persist(todoStore, {name:'todo'})
todoStore = devtools(todoStore)

export const useTodostore =create(todoStore)