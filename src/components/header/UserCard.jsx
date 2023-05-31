import React from 'react'



export default function UserCard({user}) {
    console.log(user);
  return (
    <div>
       <h1>{user.firstName}</h1> 
    </div>
  )
}
