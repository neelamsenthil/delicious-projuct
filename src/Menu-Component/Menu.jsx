import React from 'react'
import './Menu.css'
import { menu_list } from '../assets/Food Del Frontend Assets/assets/assets'

const Menu = ({category , setCategory}) => {
  return (
    <div className='explore-menu-container' id='explore-menu'>
      <h1>Explore our menu</h1>
        <p className='menu-para'>Choose from a divers menu featuring a delectable array of dishes.Our mission is to satisfy your cravings and elevate your dining experience,one delicious meal at a time. </p>



        <div className="explore-menu-list">
          {menu_list.map((item,index)=>{
                        // console.log(category)

            return(
              <div onClick={()=>setCategory((prev)=> prev === item.menu_name ? "All" : item.menu_name )} className='menu-items' key={index}>
                <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt='image'/>
                <p>{item.menu_name}</p>
              </div>
            
            )
          })}

            
        </div>
        <hr />

    </div>
  )
}

export default Menu