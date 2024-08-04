import { useEffect, useRef, useState } from "react";
import { FOOD_DUMMY_IMAGE_URL, MENU_API_URL, MENU_IMAGE_URL } from "../utils/constant";
import Shimmer from "./../shared/components/Shimmer"

const MenuComponent = () => {
    //const menu = useRef(null); 
    const [isLoading, setIsLoading] = useState(true);
    const [restaurantMenu, setRestaurantMenu] = useState(null);
    const [restaurantDetails, setRestaurantDetails] = useState(null);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchMenuData = async () => {
            setIsLoading(true);
            fetch(MENU_API_URL)
              .then((response) => response.json())
              .then((data) => {
                //menu.current = data.data.cards;
                console.log('Menu --- ', data);
                setRestaurantDetails(data?.data?.cards[2]?.card?.card?.info);
                setRestaurantMenu(data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
                console.log('restaurantDetails ---->>>  ', restaurantDetails);
                setIsLoading(false);
              })
              .catch((error) => {
                setIsLoading(false);
                setError(error);
                console.error("Error fetching the data:", error);
              });
          };
          fetchMenuData();
    }, []);

    return (
      <div>{isLoading ? <Shimmer /> :
        <div className="menu-container">
          <div className="hotel-details">
              <h3>{restaurantDetails?.name}</h3>
              <h3>{restaurantDetails?.cuisines}</h3>
          </div>
          <div className="menu-details">
            {
              restaurantMenu?.map(item => (
                <div key={item?.card?.info?.id} className="food-card">
                  {console.log(item?.card?.info)}
                  <div className="food-details">
                    <h4>{item?.card?.info?.name}</h4>
                    <span>Price - {item?.card?.info?.price/100}</span>
                  </div>
                  <div className="food-img">
                    <img src={ MENU_IMAGE_URL + (item?.card?.info?.imageId || FOOD_DUMMY_IMAGE_URL)} alt="food-imageId"></img>
                  </div>
                  </div>
              ))
            }
          </div>
        </div>
      }
      </div>
    )
}

export default MenuComponent;