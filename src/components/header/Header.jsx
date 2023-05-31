import React from 'react'
import '../product-list/product-list.styles.css'
import react from '../img/React-icon.svg.png'



export default function Header({age, name}) {
 

  return (
    <div>
      {/* <div className='header-one font-bold'>
        <div className='header'>
          <a className='www w-12' href=""><img src={react} alt="" /></a>
        <a className='www' href="">Home</a>
        <a className='www' href="">Contact</a>
        <a className='www' href="">Home</a>
        </div>
        <div className='header'>
          <a className='www' href="">About Us</a>
        </div>
    </div> */}
    {/* <h1>{name} {age}</h1> */}
    <div>        <div className='text-center mt-10 container mx-auto text-blue-700 text-3xl py-10 font-bold rounded-b-lg border-blue-800 border-2'>
      Welcome to my project <br /> <p className='mt-5 font-light'>You can find here: Header, Cards and ToDoList</p> </div></div>




      
    </div>
  )
}