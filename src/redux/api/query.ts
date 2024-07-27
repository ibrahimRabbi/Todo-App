import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const todoApi = createApi({
    reducerPath: 'todoApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    tagTypes:['todo'],
    endpoints: (builder) => {
        return {
            getAllTodo: builder.query({
                query: (priority) => ({
                    url: `/tasks?priority=${priority}`,
                    method: 'GET'
                }),
                providesTags:['todo']
            }),
 

            addTodo: builder.mutation({
                query: (data) => {
                    return {
                        url: '/task',
                        method: 'POST',
                        body : data,
                    }
                },
                invalidatesTags:['todo']
            }),
            deleteTodo: builder.mutation({
                query: (id) => ({
                    url: `/task/${id}`,
                    method:'DELETE'
                }),
                invalidatesTags:['todo']
            }),
            updateTodo: builder.mutation({
                query: (id) => ({
                    url: `/task/${id}`,
                    method:'PATCH',
                }),
                invalidatesTags:['todo']
            })
        }
    }
})


export const {useGetAllTodoQuery ,useAddTodoMutation,useUpdateTodoMutation,useDeleteTodoMutation} = todoApi






































// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
 
 


// export const todoApi = createApi({
//     reducerPath: 'todoApi',
//     baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
//     tagTypes:['todo'],
//     endpoints: (builder) => ({
//         getAllTodo: builder.query({
//             query: () => ({
//                 url: '/tasks',
//                 mathod: 'GET',
//             }),
//             providesTags:['todo']

//         }),
//         addTodo: builder.mutation({
//             query: (data) => {
//                 console.log(data)
//                 return {
//                     url: '/task',
//                     method: 'POST',
//                     body: data
//                 }
//             },
//            invalidatesTags:['todo']
//         }),
//         deleteTodo: builder.mutation({
//             query: (id) => {
//                 return {
//                     url: `/task/:${id}`,
//                     method:'DELETE'
//                 }
//             }
//         })
//     })

// })

// export const {useGetAllTodoQuery, useAddTodoMutation,useDeleteTodoMutation} = todoApi

 