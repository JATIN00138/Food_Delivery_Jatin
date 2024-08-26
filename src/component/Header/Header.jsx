import React, { useState } from 'react'
import './Header.css'

const Header = () => {
  const [menu, setMenu] = useState("Home"); 

  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order your favorite food here</h2>
            <p>Choose from a diiverse menu featching a delectable array of dishes craft with the finest igredients and culinary expertise. Our mission is to satisfy your craving and elevate your dining experience, one delicious meal at a time.
            </p>
            <a href='#explore-menu' onClick={()=> setMenu("Menu")} className={menu=== "Menu"?"active":""}><button>View Menu</button></ a>
            
        </div>
    </div>
  )
}

export default Header