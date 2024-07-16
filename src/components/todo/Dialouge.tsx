import { FormEvent, useState } from "react";
import { Button } from "../ui/button.tsx";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from "../ui/dialog.tsx"
import { Input } from "../ui/input.tsx";
import { Textarea } from "../ui/textarea.tsx";
import { useAppDispatch } from "../../redux/hook.ts";
import { addTodo } from "../../redux/features/todoSlice.tsx";
// import { } from "@radix-ui/react-dialog";




const Dialouge = () => {

    const dispatch = useAppDispatch()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const submitHandler = (e: FormEvent) => {
        e.preventDefault()
        dispatch(addTodo({ title, description}))
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
                    <Input onBlur={(e) => setTitle(e.target.value)} type="text" placeholder="Title" />
                    <Textarea onBlur={(e) => setDescription(e.target.value)} placeholder="Type your message here." />
                    <DialogClose asChild>
                        <Button className="w-full bg-cyan-500" type="submit">Sumit</Button>
                    </DialogClose>
                </form>
            </DialogContent>
        </Dialog>

    );
};

export default Dialouge;