import React, { useEffect, useState } from "react";
import {TodoContext,TodoProvider,useTodo} from './contexts/Todocontext';
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'



function App() {

  let [todos,setTodos]=useState([]);


 

  const addTodo = (todo)=>{
    setTodos((prev)=>[{id:Date.now() , ...todo}, ...prev])
  }

  const updateTodo = (id,todo)=>{
    setTodos((prev)=> prev.map((prevtudo)=> {
      return prevtudo.id === id ? todo : prevtudo
    }))
  }
  const deleteTodo = (id)=>{
    setTodos((prev)=> prev.filter((prevtudo)=>(prevtudo.id !== id)))
  }

  const toggleComplete = (id)=>{
    setTodos((prev)=> prev.map((prevtudo)=>prevtudo.id===id ? {...prevtudo, completed:!prevtudo.completed} : prevtudo     //!prevtudo.id===id ? "karo" : "nahi asai raina do"
))
  }

  useEffect(()=>{
    let alltodos = JSON.parse(window.localStorage.getItem("todos"))

    if(alltodos && alltodos.length >0){
      setTodos(alltodos)
    }
  },[])



  useEffect(()=>{
   window.localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])



  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/* <TodoItem/> */}

            {todos.map((todo) => {
             return  <div key={todo.id} className="w-full"><TodoItem  todo={todo} /></div>
             })}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App
