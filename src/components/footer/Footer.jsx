import React from 'react'
import '../product-list/product-list.styles.css'

export default function Footer({users}) {
      return (
    <div className=''>
      <div className='card_container'>
        <div className='card_title'>
          <h4>{users.fullName}</h4>
          <h5>{users.profil}</h5>
        </div>
      </div>
    
    
    </div>
    
        
      )
    }

    
 
// rnf для авто-заполнения. 