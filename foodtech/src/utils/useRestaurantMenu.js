import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constant";

const useRestaurantMenu = (resId) => {

    const [restaurantMenu, setRestaurantMenu] = useState(null);

    useEffect(() => {
        fetchMenuData();
    }, []);
    
    const fetchMenuData = async () => {
        const jsonData = await fetch(MENU_API_URL.replace('{id}', resId));
        const menuData = await jsonData.json();
        setRestaurantMenu(menuData);
    }

    return restaurantMenu;
}

export default useRestaurantMenu;