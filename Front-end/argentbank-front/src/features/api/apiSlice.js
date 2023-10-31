import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQueryWithAuth = fetchBaseQuery({
	baseUrl: "http://localhost:3001/api/v1",
	prepareHeaders: (headers, { getState }) => {
		const token = getState().auth.token;
		console.log("Token from Redux State:", token);
		if (token) {
			headers.set("Authorization", `Bearer ${token}`);
		}
		return headers;
	},
});

export const api = createApi({
	reducerPath: "api",
	baseQuery: baseQueryWithAuth,
	tagTypes: ["User"],
	endpoints: (builder) => ({
		getToken: builder.mutation({
			query: (user) => ({
				url: "/user/login",
				method: "POST",
				body: user,
			}),
			invalidatesTags: ["User"],
		}),
		postProfile: builder.mutation({
			query: () => ({
				url: "/user/profile",
				method: "POST",
			}),
			invalidatesTags: ["User"],
		}),
		putNewUserName: builder.mutation({
			query: (user) => ({
				url: "/user/profile",
				method: "PUT",
				body: { userName: user.userName },
			}),
			invalidatesTags: ["User"],
		}),
	}),
});

export const {
	useGetTokenMutation,
	usePostProfileMutation,
	usePutNewUserNameMutation,
} = api;

export const { middleware: apiMiddleware } = api;
