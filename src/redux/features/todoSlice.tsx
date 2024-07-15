import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TTodo = {
    title: string,
    description:string
}


type Tstate = {
    todos: TTodo[]
}

const initialState:Tstate = {
    todos:[]
}

const todoSlice =   createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state,payload:PayloadAction<TTodo>) => {
            state.todos.push(payload.payload)
        }
    }
})

export const {addTodo} = todoSlice.actions
export default todoSlice.reducer