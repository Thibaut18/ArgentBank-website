import { createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
	name: "auth",
	initialState: {
		isLoggedIn: false,
		token: null,
	},
	reducers: {
		setLoggedIn: (state, action) => {
			state.isLoggedIn = true;
			state.token = action.payload;
		},
		setLoggedOut: (state) => {
			state.isLoggedIn = false;
			state.token = null;
		},
	},
});

export const { setLoggedIn, setLoggedOut } = auth.actions;

export default auth.reducer;
