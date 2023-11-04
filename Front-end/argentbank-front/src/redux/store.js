// Outils configuration pour le store Redux
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Importation des reducers
import authReducer from "../features/auth/authSlice";
import userReducer from "../features/userProfile/userProfileSlice";
import { api, apiMiddleware } from "../features/api/apiSlice";

// Configuration de la persistance Redux pour le reducer d'authentification
const persistConfig = {
	key: "root",
	storage,
	whitelist: ["isLoggedIn", "token"],
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
