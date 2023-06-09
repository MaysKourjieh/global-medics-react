import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../../axiosClient";

export const loadContent = createAsyncThunk(
    "content",
    async ({ rejectWithValue }) => {
        try {
            const res = await axiosClient.get("/content");
            const data = res.data;
            return data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);
