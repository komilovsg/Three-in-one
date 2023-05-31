import React, {useState, useEffect } from 'react'
import ToDoList from '../toDoList/ToDoList';
import { FaAd } from 'react-icons/fa';
import { Route, Routes } from 'react-router-dom';

export default function AddTodo () {
  const [value, setValue] = useState('')
  const [date, setDate] = useState('')

  const [todo, setTodo] = useState ([
   
  ])
 
  useEffect (()=>{
    const saveTodos = JSON.parse(localStorage.getItem("todo"));
    if (saveTodos) {
      setTodo(saveTodos);
    }
  }, []);

  useEffect(()=> {
   localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);
 

  function saveTodo() {
    setTodo([
      ...todo,
      {
        id: Math.random(),
        title: value,
        date: date,
        status: false,
      },
    ])
    setValue('')
    setDate('')
  }

  function handleKeyDown(event) {
    if (event.keyCode === 13){
      event.preventDefault();
      saveTodo();
    }
  }



  return (
    <div>
      <div className='flex justify-center items-center '>
      <div className='w-[1000px] border-2 rounded-b-lg py-10 bg-white shadow-lg flex justify-center items-center'>
        <div className='hover:scale-105 transition-all hover:border-indigo-600 flex'>
         
            <input
              className='border-2 border-black w-full h-10 px-2 rounded-l-md mr-1 text-2xl hover:border-red-700'
              placeholder='Введите задачу'
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={handleKeyDown} //Add press "Enter"
            />
            <input
              type='date'
              className='border-2 border-black w-1/2 h-10 px-2 text-2xl hover:border-red-700'
              value={date}
              onChange={(e) => setDate(e.target.value)}
              onKeyDown={handleKeyDown} //Add press "Enter"
            />
            <button
             onClick={saveTodo}
              className='border-2 border-black px-5 ml-1 bg-green-700 text-white rounded-r-md text-2xl h-10 hover:border-red-700'
            >
            <FaAd></FaAd>
            </button>
       
        </div>
      </div>
    </div>
    <div>
    <ToDoList 
      todo = {todo} 
      setTodo={setTodo}/>
    </div>
    </div>
  )
}
