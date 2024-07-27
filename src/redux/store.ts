import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./features/todoSlice";
import { todoApi } from "./api/query";
 


const store = configureStore({
    reducer: {
        todo: todoSlice,
        [todoApi.reducerPath] : todoApi.reducer
    },
    middleware: (defaultMiddleware) => defaultMiddleware().concat(todoApi.middleware)     
})


 
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store