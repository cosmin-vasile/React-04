import { configureStore } from "@reduxjs/toolkit";
import userDetailsSlice from "../slices/userDetailsSlice";
import episodeListSlice from "../slices/episodeListSlice";

export default configureStore({
  reducer: {
    userDetails: userDetailsSlice,
    episodes: episodeListSlice,
  },
});
