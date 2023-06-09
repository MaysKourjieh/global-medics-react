import { configureStore } from "@reduxjs/toolkit";
import contentSlice from "../redux/features/content/contentSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, contentSlice);

export const store = configureStore({
    reducer: {
        content: persistedReducer,
    },
    middleware: [thunk],
});

export const persistor = persistStore(store);
