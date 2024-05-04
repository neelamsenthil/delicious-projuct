import React, { useContext } from 'react'
import './FoodItems.css'
import { assets } from '../assets/Food Del Frontend Assets/assets/assets'
import { StoreContext } from '../UseContext-Component/StoreContextProvider'

const FoodItems = ({id,name,price,image,description}) => {
  // the State [countItems,setCountItems] is only used in Home page food items .. //

  const {cartItems,addToCart,increaseFromCart,removeFromCart} = useContext(StoreContext);


  return (
    <div className='fooditems-container'>
        <div className="food-items-img">
            <img className='img' src={image} alt='img'/>
            
              {!cartItems[id]
              ? <img className='add-cart' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=''/>
              : <div className='food-item-datas'> 
              <img className='remove' onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt=''/>
              <p>{cartItems[id]}</p>
              <img className='Add' onClick={()=>increaseFromCart(id)} src={assets.add_icon_green} alt=''/>
              </div>
            }
            
        </div>
        
        <div className="food-items-info">
            <div className="food-items-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt=''/>
            </div>
            <p className="food-items-desc">{description}</p>
            <p className="food-items-price">${price}</p>


        </div>

    </div>
  )
}

export default FoodItems