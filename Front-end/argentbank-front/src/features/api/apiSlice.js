import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Fonction de requête injectant le token d'authentification dans les en-têtes
const baseQueryWithAuth = fetchBaseQuery({
	baseUrl: "http://localhost:3001/api/v1",
	prepareHeaders: (headers, { getState }) => {
		const token = getState().auth.token;
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
		// Mutation pour obtenir un token (login)
		getToken: builder.mutation({
			query: (user) => ({
				url: "/user/login",
				method: "POST",
				body: user,
			}),
			invalidatesTags: ["User"],
		}),
		// Mutation pour poster le profil utilisateur
		postProfile: builder.mutation({
			query: () => ({
				url: "/user/profile",
				method: "POST",
			}),
			invalidatesTags: ["User"],
		}),
		// Mutation pour mettre à jour le nom d'utilisateur
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
