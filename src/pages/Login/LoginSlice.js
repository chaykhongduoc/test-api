import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { axiosInstance } from "../../apis/baseApi";
import { setAuth } from "../../redux/actions";
import setAuthToken from "../../utils/setAuthToken";

//authenticate user

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (dataForm) => {
    // const dispatch = useDispatch();
    // const loadUser = async () => {
    //   if (localStorage["accessToken"]) {
    //     setAuthToken(localStorage["accessToken"]);
    //   }
    //   try {
    //     const res = await axiosInstance.get("/Auth");

    //     if (res.data.success) {
    //       dispatch(
    //         setAuth({
    //           isAuthenticated: true,
    //         })
    //       );
    //     }
    //   } catch (error) {
    //     localStorage.removeItem("accessToken");
    //     setAuthToken(null);
    //     dispatch(
    //       setAuth({
    //         isAuthenticated: false,
    //       })
    //     );
    //   }
    // };

    try {
      const res = await axiosInstance.post("/Auth/login", dataForm);
      console.log(res);
      window.localStorage.setItem("accessToken", res.data.token);

      // await loadUser();
      return res;
    } catch (err) {
      // if (error.response.data) return error.response.data;
      // else return { success: false, message: err.message };
    }
  }
);

export const LoginSlice = createSlice({
  name: "auth",
  initialState: {
    // authLoading: true,
    // isAuthenticated: false,
    user: null,
  },
  reducers: {
    // setAuth: (state, action) => {
    //   state.authLoading = action.payload;
    // },
  },
  extraReducers: {
    [loginUser.pending]: (state, action) => {
      console.log("waiting for handling ");
    },

    [loginUser.fulfilled]: (state, action) => {
      // state.user = action.payload;
      console.log("done");
    },
  },
});
