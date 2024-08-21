import { useEffect, useState } from "react";
import { MENU_API_URL } from "../../utils/constant";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const MenuComponent = () => {
    //const menu = useRef(null); 
    const [isLoading, setIsLoading] = useState(true);
    const [restaurantMenu, setRestaurantMenu] = useState(null);
    const [restaurantDetails, setRestaurantDetails] = useState(null);
    const [error, setError] = useState(null);
    const params = useParams();
    
    /*if(resMenuData === null) {
      return <Shimmer />;
    }
    console.log('resMenuData --- ', resMenuData);
    setRestaurantDetails(resMenuData?.data?.cards[2]?.card?.card?.info);
    setRestaurantMenu(resMenuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
    */
    useEffect(() => {
        const fetchMenuData = async () => {
            setIsLoading(true);
            fetch(MENU_API_URL.replace('{id}', params.resId))
              .then((response) => response.json())
              .then((data) => {
                //menu.current = data.data.cards;
                //console.log('Menu --- ', data);
                setRestaurantDetails(data?.data?.cards[2]?.card?.card?.info);
                setRestaurantMenu(data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
                setIsLoading(false);
              })
              .catch((error) => {
                setIsLoading(false);
                setError(error);
                console.error("Error fetching the data:", error);
              });
          };
          fetchMenuData();
    }, [params.resId]);

    return (
      <div className="menu-container">
          <div>{error}</div>
          <div>{isLoading ? 'Loading .... ': ''}</div>
          <div className="hotel-details">
              <h3>{restaurantDetails?.name}</h3>
              <h3>{restaurantDetails?.cuisines}</h3>
          </div>
          <div className="menu-details">
            {
              restaurantMenu?.itemCards?.map(item => (
                <ItemList key={item?.card?.info?.id} restaurantMenu={item} />
              ))
            }
          </div>
        </div>
    )
}

export default MenuComponent;