import { createSlice } from "@reduxjs/toolkit";
import { loadContent } from "./contentActions";

const initialState = {
    loading: false,
    contentInfo: null,
    error: null,
    success: false,
};

const contentSlice = createSlice({
    name: "content",
    initialState,
    reducers: {},
    extraReducers: {
        [loadContent.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [loadContent.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.contentInfo = payload.data;
            state.success = true;
        },
        [loadContent.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
    },
});
export default contentSlice.reducer;
