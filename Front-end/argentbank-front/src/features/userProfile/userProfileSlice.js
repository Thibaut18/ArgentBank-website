import { createSlice } from "@reduxjs/toolkit";

const userProfile = createSlice({
	name: "userProfile",
	initialState: null,
	reducers: {
		setUserProfile: (state, action) => {
			return action.payload;
		},
	},
});

export const { setUserProfile } = userProfile.actions;

export default userProfile.reducer;
