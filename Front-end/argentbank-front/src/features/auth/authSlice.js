import { createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
	name: "auth",
	initialState: {
		isLoggedIn: "",
	},
	reducers: {
		setLoggedIn: (state, action) => {
			state.isLoggedIn = action.payload;
		},
		setLoggedOut: (state) => {
			state.isLoggedIn = "";
		},
	},
});

export const { setLoggedIn, setLoggedOut } = auth.actions;

export default auth.reducer;
