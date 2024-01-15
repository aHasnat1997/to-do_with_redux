import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const toDoseApi = createApi({
    reducerPath: 'toDoseApi',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
    tagTypes: ['ToDoes'],
    endpoints: (builder) => ({
        getAllToDoes: builder.query({
            query: () => ({
                url: '/todos',
                method: 'GET'
            }),
            providesTags: ['ToDoes']
        }),
        postToDo: builder.mutation({
            query: (data) => ({
                url: '/todos',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['ToDoes']
        })
    })
});

export const { useGetAllToDoesQuery, usePostToDoMutation } = toDoseApi;