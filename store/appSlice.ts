import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  menuList: [],
  footerData: {},
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setMenuList(state, action) {
      state.menuList = action.payload;
    },
    setFooterData(state, action) {
      state.footerData = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});

export const { setMenuList, setFooterData } = appSlice.actions;
export const selectMenuList = (state: any) => state.app.menuList;
export const selectFooterData = (state: any) => state.app.footerData;
export default appSlice.reducer;
