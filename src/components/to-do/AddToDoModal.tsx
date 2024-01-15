import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { DialogClose } from "@radix-ui/react-dialog";
import { FaPlus } from "react-icons/fa";
import { Textarea } from "../ui/textarea";
// import { useAppDispatch } from "@/redux/hooks";
import { TToDo } from "@/redux/features/toDoes";
import { FormEvent, useRef } from "react";
import { usePostToDoMutation } from "@/redux/services/toDose";

function AddToDoModal() {
    //! for local state
    // const dispatch = useAppDispatch();
    //! for api state
    const [newData, { isError }] = usePostToDoMutation(); //? Also have property like {isLoading, isSuccess, ...etc}
    console.log("AddToDoModal Error ==> ", isError);


    const titleRef = useRef<HTMLInputElement>(null);
    const detailsRef = useRef<HTMLTextAreaElement>(null);

    const handelSubmit = (e: FormEvent) => {
        e.preventDefault();

        const data: TToDo = {
            title: titleRef.current?.value as string,
            description: detailsRef.current?.value as string,
            createdAt: new Date().toISOString(),
            status: false
        }

        //! for local state
        // dispatch(addToDo(data));
        //! for api state
        newData(data);
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="text-2xl lg:text-5xl size-16 lg:size-24 rounded-full"><FaPlus /></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-slate-900 border-slate-900">
                <DialogHeader>
                    <DialogTitle className="text-4xl text-white">Add To-Do</DialogTitle>
                    <DialogDescription className="text-xl">
                        Add your to-do here...
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handelSubmit}>
                    <div className="space-y-4">
                        <Input
                            id="title"
                            className="outline-none"
                            placeholder="Add Title"
                            ref={titleRef}
                        />
                        <Textarea
                            id="description"
                            className="outline-none"
                            placeholder="Add Description"
                            ref={detailsRef}
                        />
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button
                                type="submit"
                                variant='secondary'
                                className="mt-4"
                            >
                                Save
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default AddToDoModal;