import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TToDo } from "../features/toDoes";

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
        }),
        toggleToDoStatus: builder.mutation({
            query: (data: TToDo) => ({
                url: `/todos/${data.id}`,
                method: 'PATCH',
                body: data
            }),
            invalidatesTags: ['ToDoes']
        }),
        deleteToDo: builder.mutation({
            query: (id) => ({
                url: `/todos/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['ToDoes']
        })
    })
});

export const { useGetAllToDoesQuery, usePostToDoMutation, useDeleteToDoMutation, useToggleToDoStatusMutation } = toDoseApi;