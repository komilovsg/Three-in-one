import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from './header/Header';
import { Counter } from './hook/Counter';
import HeaderTodo from './header/HeaderTodo';
import UserCards from './hook/UserCards';
import profile from "./img/profile-img.png";
import View from './view/View';

export default function RoutsAdd() {
    const userss = [
        {
          id: 1,
          img: profile,
          fullName: "Ivan",
          skills: "IT",
          text: "My acount Apply",
          age: "28 лет",
        },
        {
          id: 2,
          img: profile,
          fullName: "Maksim",
          skills: "IT",
          text: "My acount Apply",
          age: "25 лет",
        },
        {
          id: 3,
          img: profile,
          fullName: "Aleksey",
          skills: "Bank",
          text: "My acount Lorem",
          age: "30 лет",
        },
        {
          id: 4,
          img: profile,
          fullName: "Mark",
          skills: "IT",
          text: "My acount Lorem",
          age: "27 лет",
        },
        {
          id: 5,
          img: profile,
          fullName: "Mark",
          skills: "Bank",
          text: "My acount Apply",
          age: "29 лет",
        },
      ];
  return (
    <Routes>
    <Route path='/' element={<Header/>}/>
        <Route path='/counter' element={<Counter/>}/>
        <Route path='/todolist' element={<HeaderTodo/>}/>
        <Route path='/usercards' element={<UserCards userss = {userss} />}/>
        <Route path='/usercards/view/:id' element={<View userss = {userss}/>}></Route>
      
  </Routes>
  )
}
