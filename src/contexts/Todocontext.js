import { createContext,useContext  } from "react";

 export const TodoContext=createContext({
     todos:[
      {
         id:1,
         tudo:"sayan",
         completed:false,
      }
     ],
     addTodo : (tudo)=>{},
     updateTodo : (id,tudo)=>{},
     deleteTodo : (id)=>{},
     toggleComplete : (id)=>{}

 })


 export const TodoProvider=TodoContext.Provider;


 export const useTodo=()=>{
    return useContext(TodoContext)
 }


