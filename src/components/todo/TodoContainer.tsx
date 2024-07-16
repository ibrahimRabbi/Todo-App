 import { useAppSelector } from "../../redux/hook";
import Dialouge from "./Dialouge";
import DropDown from "./DropDown";
import TodoCard from "./TodoCard";

const TodoContainer = () => {

    const { todos } = useAppSelector((state) => state.todo)
    


    
    return (
        <div className="mt-7">
            <div className="flex justify-between">      
                 <Dialouge/>
                <DropDown/>
            </div>
            <div className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg mt-3 p-2 space-y-4">
                <div className="bg-white rounded-lg p-4 space-y-4">
                    {
                        todos.map(todo => <TodoCard key={Math.random()} title={todo.title} description={todo.description} id={todo.id as string} />)
                    }
                </div>
            </div>
        </div>

    );
};

export default TodoContainer;