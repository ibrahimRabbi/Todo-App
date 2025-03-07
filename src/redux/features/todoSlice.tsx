import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Tstate = {
    todos: object[] 
}

const state:Tstate = {
    todos : []
}

const todoSlice = createSlice({
    name: 'todo',
    initialState: state,
    reducers: {
        addTodo: (state, payload:PayloadAction<object>) => {
            state.todos.push(payload.payload)
        },
        removeTodo: (state, payload:PayloadAction<string>) => {
           state.todos = state.todos.filter(todo=> todo?.id !== payload.payload)
        }
    }
})

export const { addTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer






// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// export type TTodo = {
//     id?: string,
//     title: string,
//     description: string,
//     isCompelete?: boolean
// }


// type Tstate = {
//     todos: TTodo[]
// }

// const initialState: Tstate = {
//     todos: []
// }
 

// const todoSlice = createSlice({
//     name: 'todo',
//     initialState,
//     reducers: {
//         addTodo: (state, payload: PayloadAction<TTodo>) => {
//             const id = Math.random().toString(36).slice(2)
//             state.todos.push({ ...payload.payload, isCompelete: false, id:id  })
//         },
//         deleteTodo: (state, payload: PayloadAction<TTodo[]>) => {
//             state.todos = payload.payload
//         }
//     }
// })

// export const { addTodo,deleteTodo } = todoSlice.actions
// export default todoSlice.reducer