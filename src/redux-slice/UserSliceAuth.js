import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { SignIn } from "./middleware/authMiddleware";
// import { getFromLocalStorage } from "../../utils";

let user =JSON.parse(localStorage.getItem("user"))
const initialState = {
  authErr: "",
  loading: false,
  user: user != (undefined || null) ? user : {},
  userLoggedIn: false,
};

export const auth = createSlice({
  name: "user-auth",
  initialState,
  reducers: {
    signin: (state) => state,
    InvalidUserName: (state, { payload }) => {
      state.authErr = payload;
    },
    userLoggedInState: (state, { payload }) => {
      state.userLoggedIn = payload;
    },
    errorRemove:(state)=>{
        state.authErr=""
    }
  },

  extraReducers: {
    [SignIn.pending]: (state) => {
      state.loading = true;
    },
    [SignIn.fulfilled]: (state, payload ) => {
      console.log("user >", payload);
      state.loading = false;
      state.authErr = "";
      state.user = payload;
      state.userLoggedIn=true
    },
    [SignIn.rejected]: (state, { payload }) => {
      state.loading = false;
      state.authErr = payload.err;
    },

    // [SignOut.pending]: (state, { payload }) => {
    //   state.loading = true;
    // },
    // [SignOut.fulfilled]: (state, { payload }) => {
    //   // state.loading = false
    //   state.authErr = "";
    //   state.userLoggedIn = false;
    // },
    // [SignOut.rejected]: (state, { payload }) => {
    //   state.loading = false;
    //   state.authErr = payload.err;
    //   state.userLoggedIn = false;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { InvalidUserName, errorRemove, userLoggedInState } = auth.actions;

export default auth.reducer;
