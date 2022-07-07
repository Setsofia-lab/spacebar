import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "users",
  initialState: { listing: {}, listings: [], booking: {} },
  reducers: {
    addlisting: (state, action) => {
      state.listings.push(action.payload);
    },
    addbooking: (state, action) => {
      state.booking = action.payload;
    },
    setListingsToState: (state, action) => {
      state.listings = action.payload;
    },
    selectedListing: (state, actions) => {
      state.listing = actions.payload;
    },
  },
});
export const {
  addbooking,
  addlisting,
  setListingsToState,
  selectedListing,
} = UserSlice.actions;

export default UserSlice.reducer;
