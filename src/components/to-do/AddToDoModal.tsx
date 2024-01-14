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

function AddToDoModal() {
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
                <div className="space-y-4">
                    <Input
                        id="title"
                        className="outline-none"
                        placeholder="Add Title"
                    />
                    <Textarea
                        id="description"
                        className="outline-none"
                        placeholder="Add Description"
                    />
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button type="submit" variant='secondary'>
                            Save
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default AddToDoModal;