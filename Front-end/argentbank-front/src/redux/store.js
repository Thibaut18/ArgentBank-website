import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // utilise le localStorage pour le stockage web
import authReducer from "../features/auth/authSlice";
import userReducer from "../features/userProfile/userProfileSlice";
import { api, apiMiddleware } from "../features/api/apiSlice";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["auth"],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
	reducer: {
		auth: persistedAuthReducer,
		user: userReducer,
		[api.reducerPath]: api.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }).concat(apiMiddleware),
});
