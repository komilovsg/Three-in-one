import React from 'react'
import '../product-list/product-list.styles.css'
import react from '../img/React-icon.svg.png' 
export const Section = ({users}) => {
  // console.log(users);
  return (
    <div className='flex gap-10 mt-10 ml-10'>
      {users.map((user) => (
       <div className='card_container flex justify-center items-center border-2  border-black px-5 py-5 bg-green-300 hover:shadow-lg hover:shadow-red-300 hover:origin-center hover:scale-125 hover:transition-all hover:ease-in hover:duration-200 '>
        <div className="card_title">
          <h1>{user.fullName}</h1>
          <h1>{user.profile}</h1>
          <h2>{user.text}</h2>
          {/* <h1>{user.lastName}</h1> */}
        </div>

       </div>
      
      ))}


    </div>
  
  )
}

