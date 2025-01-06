import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RESTURANT_API_URL } from '../../utils/constant';

// Create async thunk for fetching restaurants
export const fetchRestaurants = createAsyncThunk(
  'restaurants/fetchRestaurants',
  async () => {
    const response = await fetch(RESTURANT_API_URL);
    const data = await response.json();
    return data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  }
);

const restaurantSlice = createSlice({
  name: 'restaurants',
  initialState: {
    list: [],
    filteredList: [],
    isLoading: false,
    error: null,
    searchText: ''
  },
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
      state.filteredList = state.list.filter(restaurant => 
        restaurant.info.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    filterTopRated: (state) => {
      state.filteredList = state.list.filter(restaurant => 
        restaurant.info.avgRating > 4
      );
    },
    resetFilter: (state) => {
      state.filteredList = state.list;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload;
        state.filteredList = action.payload;
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { setSearchText, filterTopRated, resetFilter } = restaurantSlice.actions;
export default restaurantSlice.reducer;