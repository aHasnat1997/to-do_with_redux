import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

export type TToDo = {
    id?: string,
    title: string,
    description: string,
    createdAt: string,
    status: boolean
}

const initialState: TToDo[] = []

export const toDoesSlice = createSlice({
    name: 'toDoes',
    initialState,
    reducers: {
        addToDo: (state, action: PayloadAction<TToDo>) => {
            state.unshift(action.payload);
        },
        removeToDo: (state, action: PayloadAction<string>) => {
            return state.filter(item => item.id !== action.payload);
        },
        toggleToDoStatus: (state, action: PayloadAction<string>) => {
            return state.map(item => item.id === action.payload ? { ...item, status: !item.status } : item).sort((a, b) => (a.status === b.status) ? 0 : a.status ? 1 : -1);
        }
    }
})

export const { addToDo, removeToDo, toggleToDoStatus } = toDoesSlice.actions;
export default toDoesSlice.reducer;