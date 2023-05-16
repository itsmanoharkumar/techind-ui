import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  menuList: [],
  footerData: {},
  pageData: {},
  technologyData: {},
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
    setPageData(state, action) {
      state.pageData = action.payload;
    },
    setTechnologyData(state, action) {
      state.technologyData = action.payload;
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

export const { setMenuList, setFooterData, setPageData, setTechnologyData } =
  appSlice.actions;
export const selectMenuList = (state: any) => state.app.menuList;
export const selectFooterData = (state: any) => state.app.footerData;
export default appSlice.reducer;
