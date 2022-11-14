import { createSlice } from "@reduxjs/toolkit";

export const userDetailsSlice = createSlice({
  name: "user-details",
  initialState: {
    id: null,
    email: null,
    firstName: null,
    lastName: null,
  },
  reducers: {
    setUserDetails: (state, action) => {},
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setName: (state, action) => {
      const [firstName, lastName] = action.payload.split(" ");
      state.firstName = firstName;
      state.lastName = lastName;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserDetails, setEmail, setName } = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
