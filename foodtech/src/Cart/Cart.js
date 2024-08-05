import { useDispatch, useSelector } from "react-redux";
import ItemList from "../Home/menu/ItemList";
import { removeItem } from "../store/reducers/cartSlice";

const CartComponent = () => {

    const cartItems = useSelector(store => store.cart.items);
    console.log('cartItems ', cartItems);
    const dispatch = useDispatch();
    const handleClear = () => {
        dispatch(removeItem());
    }
    return (
        <div className="cart-container">
            {
                cartItems.length === 0 ? (<div>
                    <h3>No Items added Yet!!</h3>
                </div>) :
                    (<div>
                        <div className="flex justify-center">
                            <h2>AddedItems in Cart</h2>
                            <button className="common-btn remove-to-cart" onClick={() => handleClear()}>Clear</button>
                        </div>
                        {
                            cartItems.map(item => (
                                <ItemList key={item?.card?.info?.id} restaurantMenu={item} isCartPage="true" />
                            ))
                        }
                    </div>)
            }

        </div>
    )
}

export default CartComponent;