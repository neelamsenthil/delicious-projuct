import React, { useContext, useState } from 'react'
import './Nav.css'
import { assets } from '../assets/Food Del Frontend Assets/assets/assets'
import { Link } from 'react-router-dom'
import Home from '../Home.Component/Home'
import { StoreContext } from '../UseContext-Component/StoreContextProvider'



const Nav = ({ setShowLogin}) => {
    const[menu,setMenu]= useState("home")
    const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className='navbar-container'>
   <Link to={'/'}> <h1>|)e|i(iou$</h1> </Link>
    <ul className='navbar-menu'>
      <Link to={'/'} onClick={()=>setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
      <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu === "menu" ? "active" : "" }>Menu</a>
      <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : "" }>Mobile-app</a>
      <a href='#footer' onClick={()=>setMenu("contact us")} className={menu === "contact us" ? "active" : "" }>Contact us</a>

    </ul>
    <div className='navbar-right'>
      <img src={assets.search_icon} alt='' />
      <div className="cart">

       <Link to={'/Cart'}><img src={assets.basket_icon} /></Link>
        <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>

      </div>
      <button onClick={()=>setShowLogin(true)}>Sing in</button>


    </div>
  </div>

  )
}

export default Nav