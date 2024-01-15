import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

export type TToDo = {
    id: string,
    title: string,
    description: string,
    createdAt: string,
    status: 'done' | 'pending'
}

const initialState: TToDo[] = []

export const toDoesSlice = createSlice({
    name: 'toDoes',
    initialState,
    reducers: {
        addToDo: (state, action: PayloadAction<TToDo>) => {
            state.push(action.payload);
        },
        removeToDo: (state, action: PayloadAction<string>) => {
            return state.filter(item => item.id !== action.payload);
        },
    }
})

export const { addToDo, removeToDo } = toDoesSlice.actions;
export default toDoesSlice.reducer;