import React, { useContext} from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../context/StoreContext'

const FoodItem = ({id,name,image,price,description}) => {
    // const[itemCount,setItemCount]= useState(0)
    const{cartItems,addToCart, removeFromCart} = useContext(StoreContext);

  return (
    <div>
        <div className="food-item">
            <div className="food-item-img-container">
                <img className="food-item-image" src={image} alt="food_item_i mage"  />
                { !cartItems[id]
                ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt='add-icon'/>
                :<div className="food-item-counter">
                <img onClick={()=> removeFromCart(id)} src={assets.remove_icon_red} alt='remove-icon'/>
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt='add-icon-green'/>
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt='ratings'/>
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">Rs {price}</p>
            </div>
        </div>
    </div>
  )
}

export default FoodItem