import {FormEvent} from "react";
import { Button } from "../ui/button.tsx";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from "../ui/dialog.tsx";
import { Input } from "../ui/input.tsx";
import { Textarea } from "../ui/textarea.tsx";
import { useAddTodoMutation } from "../../redux/api/query.ts";
// import { useAppDispatch } from "../../redux/hook.ts";
// import { addTodo } from "../../redux/features/todoSlice.tsx";
 



const Dialouge = () => {

    //const dispatch = useAppDispatch()
    const [addData,{isLoading,isSuccess,data}] = useAddTodoMutation()
     


    const submitHandler = (e:FormEvent) => {
        e.preventDefault()
        
        const data = {
            title: e.target.title.value,
            description: e.target.description.value,
            priority: e.target.priority.value
        }
 
        //dispatch(addTodo({ title, description }))
        addData(data)

    }



    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-teal-500 to-cyan-600">Add Todo</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add your Todo</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone This will permanently delete your
                    </DialogDescription>
                </DialogHeader>
                <form className="space-y-4 mt-2" onSubmit={submitHandler}>
                    <Input name="title" type="text" placeholder="Title" />
                    <Textarea name="description" placeholder="Type your message here." />
                    <select className="w-full border p-3 rounded-lg" name="priority">
                        <option value="super high">super high</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                    <DialogClose asChild>
                        <Button className="w-full bg-cyan-500" type="submit">Submit</Button>
                    </DialogClose>
                </form>
            </DialogContent>
        </Dialog>

    );
};

export default Dialouge;