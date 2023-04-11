import { createAsyncThunk } from "@reduxjs/toolkit";
import { managerLogin, employeeLogin, adminLogin } from "../../apis";
import { showPopup } from "../UserSliceAuth";

export const SignIn = createAsyncThunk(
  "SignIn",
  async (
    thunkAPI,
    { dispatch, getState, rejectWithValue, fulfillWithValue }
  ) => {
    try {
      debugger;
      console.log("user>>>", thunkAPI);
      let res;
      if (thunkAPI.role === "manager") {
        res = await managerLogin(thunkAPI.user);
      } else if (thunkAPI.role === "employee") {
        res = await employeeLogin(thunkAPI.user);
      } else {
        alert("admin");
      }
      console.log("res", res);

      if (res.status != "200") {
        return rejectWithValue({
          err: "Invalid Email or Password",
          value: false,
        });
      }
      localStorage.setItem("user", JSON.stringify(res.data));
      dispatch(
        showPopup({ state: true, message:res.data.message })
      );

      setTimeout(() => {
        if (thunkAPI.role === "manager") {
          localStorage.setItem("role", "manager");

          thunkAPI.navigate("/customer");
        } else if (thunkAPI.role === "employee") {
          thunkAPI.navigate("/employee");
          localStorage.setItem("role", "employee");
        } else {
          localStorage.setItem("role", "admin");
          thunkAPI.navigate("/customer");
        }
      });

      return fulfillWithValue(res.data);
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);
