
// import { useAppSelector } from "../../redux/hook";
import { useState } from "react";
import { useGetAllTodoQuery } from "../../redux/api/query";
import Dialouge from "./Dialouge";
import DropDown from "./DropDown";
import TodoCard from "./TodoCard";

const TodoContainer = () => {

    const [priority,setPriority] = useState('')
    //const { todos } = useAppSelector((state) => state.todo)
    const { data, isLoading } = useGetAllTodoQuery(priority)

    console.log(data?.data)


    if (isLoading) {
        return <p>loading....</p>
    }


    return (
        <div className="mt-7">
            <div className="flex justify-between">
                <Dialouge />
                <DropDown changeHandler = {setPriority} />
            </div>
            <div className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg mt-3 p-2 space-y-4">
                <div className="bg-white rounded-lg p-4 space-y-4">
                    {
                        data?.data?.map((todo: any) => <TodoCard key={Math.random()} title={todo.title} description={todo.description} id={todo._id as string} priority={todo.priority} />)
                    }
                </div>
            </div>
        </div>

    );
};

export default TodoContainer;