import { createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
	name: "auth",
	initialState: {
		isLoggedIn: false, // préférable d'utiliser un booléen ici
		token: null, // Ajout d'un champ pour le token
	},
	reducers: {
		setLoggedIn: (state, action) => {
			state.isLoggedIn = true;
			state.token = action.payload; // Stockage du token
		},
		setLoggedOut: (state) => {
			state.isLoggedIn = false;
			state.token = null; // Effacement du token
		},
	},
});

export const { setLoggedIn, setLoggedOut } = auth.actions;

export default auth.reducer;
