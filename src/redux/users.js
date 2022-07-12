import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "users",
  initialState: { listing: {}, listings: [], booking: {}, user: null },
  reducers: {
    addlisting: (state, action) => {
      state.listing = action.payload;
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
    setUserToState: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const {
  addbooking,
  addlisting,
  setListingsToState,
  selectedListing,
  setUserToState,
} = UserSlice.actions;

export default UserSlice.reducer;
