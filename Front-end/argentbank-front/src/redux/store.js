import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import userReducer from "../features/userProfile/userProfileSlice";
import { api, apiMiddleware } from "../features/api/apiSlice";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		user: userReducer,
		[api.reducerPath]: api.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiMiddleware),
});
