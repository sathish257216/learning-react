import { useDispatch } from "react-redux";
import { FOOD_DUMMY_IMAGE_URL, MENU_IMAGE_URL } from "../../utils/constant";
import { addItem, removeItem } from "../../store/reducers/cartSlice";

const ItemList = ({restaurantMenu, isCartPage = false}) => {
    const dispatch = useDispatch();

    const handleAdd = (restaurantMenu) => {
      dispatch(addItem(restaurantMenu));
    }

    const handleRemove = (restaurantMenu) => {
      dispatch(removeItem(restaurantMenu));
    }

    return (
      <div className="food-card">
        <div className="food-details">
          <h4>{restaurantMenu?.card?.info?.name}</h4>
          <span>Price - {restaurantMenu?.card?.info?.price/100}</span>
        </div>
        <div className="food-right-cont">
          <img src={ MENU_IMAGE_URL + (restaurantMenu?.card?.info?.imageId || FOOD_DUMMY_IMAGE_URL)} alt="food-imageId"></img>
          {
            isCartPage ? <button className="common-btn add-to-cart" onClick={() => handleRemove(restaurantMenu)}>Remove</button> :
            <button className="common-btn remove-to-cart" onClick={() => handleAdd(restaurantMenu)}>Add</button>

          }
        </div>
        </div>
    )
}

export default ItemList;