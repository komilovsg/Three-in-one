import React, { Component } from 'react'
import AddTodo from '../AddTodo/AddTodo'

export default function HeaderTodo () {
    return (
      <div>
        <div className='text-center bg-blue-800 container mx-auto text-white text-3xl py-10 font-bold rounded-b-lg border-blue-800 border-2'>Todo List</div>
      <AddTodo/>
      </div>
    )
  }




