import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../UseContext-Component/StoreContextProvider'
import FoodItems from '../FoodItems/FoodItems'

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes near you</h2>
        <div className="food-list">
            {food_list.map((item,index)=>{
              if(category ==="All" || category === item.category) {
                return <FoodItems key={index}  id={item._id} name={item.name} image={item.image} price={item.price}  description={item.description} category={item.category} />

              }
            })}
        </div>

    </div>
  )
}

export default FoodDisplay