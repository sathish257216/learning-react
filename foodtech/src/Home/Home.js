import { useEffect, useRef, useState } from "react";
import ResturantCardComponent, { withHighlyRatedResturantCardComponent } from "../shared/components/ResturantCard";
import ShimmerComponent from "../shared/components/Shimmer";
import { useDispatch, useSelector } from 'react-redux';
import { 
    fetchRestaurants,
    setSearchText, 
    filterTopRated, 
    resetFilter 
  
 } from "../store/reducers/restaurantSlice";

const HomeComponent = () => {
  const resturantDetails = useRef(null);
  const dispatch = useDispatch();
  const { 
    filteredList, 
    isLoading, 
    error, 
    searchText 
  } = useSelector(state => state.restaurants);
  
  
  const HighlyRatedResturant = withHighlyRatedResturantCardComponent(ResturantCardComponent); 

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

  const handleSearch = (e) => {
    dispatch(setSearchText(e.target.value));
  };


  return (
    <div className="res-container">
        <div className="error-message">
            <p>{error}</p>
        </div>
        <div className="top-bar">
          <div className="filter-bar">
            <button 
              className="filter-btn common-btn" 
              onClick={() => dispatch(filterTopRated())}
            >
              Top Rated
            </button>
            <button 
              className="filter-btn common-btn" 
              onClick={() => dispatch(resetFilter())}
            >
              Reset
            </button>
          </div>
          <div className="serach-bar">
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              value={searchText}
              onChange={handleSearch}
            />
          </div>
        </div>
        {isLoading ? (
            <ShimmerComponent />
        ) : (
            <div className="card-container">
            {
              filteredList?.map((hotel) => (
                  hotel.info.avgRating > 4 ? <HighlyRatedResturant key={hotel.info.id} resData={hotel} /> :
                  <ResturantCardComponent key={hotel.info.id} resData={hotel} />
              ))
            }
            </div>
        )}
    </div>
  );
};

export default HomeComponent;
