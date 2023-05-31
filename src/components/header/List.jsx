import React, {useState} from 'react'
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import HeaderTodo from "./components/header/HeaderTodo";
import { Counter } from "./components/hook/Counter";
import ToDoList from "./components/toDoList/ToDoList";
import List from './components/header/List';
import UserCard from './components/header/UserCard';



function App() {
  const [todo, setTodo] = useState ([
    {
      id: 1,
      title: "Выучить английский язык.",
      status: true
    },
    {
      id: 2,
      title: "Прочитать 50 страниц.",
      status: true
    },
    {
      id: 3,
      title: "Проверить почту.",
      status: false
    },

  ])

  console.log(todo);
 

 
  return (
    <>
      {/* <Counter/> */}
      {/* <HeaderTodo/> */}
      <AddTodo todo={todo} setTodo={setTodo}/>
      <ToDoList todo={todo} setTodo = {setTodo}/>
    </>
  );
}

export default App;

