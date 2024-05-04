import React, { useEffect, useState } from 'react'
import './Cart.css'
import { useContext } from 'react'
import { StoreContext } from '../UseContext-Component/StoreContextProvider'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { food_list, cartItems, removeFromCart, getTotalCartAmount } = useContext(StoreContext)

  const navigate = useNavigate()
  const [total,setTotal] = useState(0)


  return (
    <div className='cart-container'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            // console.log(cartItems[item._id])

            return (
              <div>
                <div key={index} className="cart-foods">
                  <img src={item.image} alt='' />
                  <p className='child'>{item.name}</p>
                  <p>${item.price}</p>
                  <p className='child'>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)} className='remove'>x</p>
                </div>
                <br />
                <hr />


              </div>


            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount() }</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0 ? 0 :getTotalCartAmount()+2}</b>
            </div>

          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code,Enter it here</p>
            <div className="promocode-input">
              <input type="text" placeholder='Promo code'/>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart