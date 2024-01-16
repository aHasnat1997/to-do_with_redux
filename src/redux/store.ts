import { configureStore } from '@reduxjs/toolkit'
import toDoesReducer from './features/toDoes'
import { toDoseApi } from './services/toDose'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer: {
        [toDoseApi.reducerPath]: toDoseApi.reducer,
        toDoes: toDoesReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(toDoseApi.middleware)
})

setupListeners(store.dispatch);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;