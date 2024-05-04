import React, { createContext, useState, useEffect } from 'react'
import { food_list } from '../assets/Food Del Frontend Assets/assets/assets'

export const StoreContext = createContext(null)



const StoreContextProvider = (props) => {

  // the initial value of cartItems is Empty Object{ }  //
  const [cartItems, setCartItems] = useState([])

  // const addToCart = (itemid) => {
  //   if (!cartItems[itemid]) {
  //     setCartItems((prev) => ({ ...prev, [itemid]: 1 }))
  //   }
  //   else {
  //     setCartItems((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }))
  //   }

  // }
   const addToCart = (itemid) => {
    setCartItems((prev)=>({...prev,[itemid]:1}))
   }

   const increaseFromCart = (itemid)=>{
    setCartItems((prev)=>({...prev,[itemid]:prev[itemid]+1}))
   }

  const removeFromCart = (itemid) => {
    setCartItems((prev)=>({...prev,[itemid]:prev[itemid]-1}))
  }

  // useEffect(()=>{
  //   console.log(cartItems)
  // },[cartItems])

  const getTotalCartAmount = () => {
    let totalAmount = 0
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item)
        totalAmount += itemInfo.price * cartItems[item]
        console.log(cartItems[item])
      }
    }
    return totalAmount;
  }


  const ContextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    increaseFromCart,
    removeFromCart,
    getTotalCartAmount
  }
  return (
    <div>
      <StoreContext.Provider value={ContextValue}>
        {props.children}

      </StoreContext.Provider>
    </div>
  )
}

export default StoreContextProvider