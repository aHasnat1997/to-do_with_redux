import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { DialogClose } from '@radix-ui/react-dialog';
import { FaRegEdit } from 'react-icons/fa';
import { Textarea } from '../ui/textarea';

function ToDoEditModal() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant='ghost' className='text-2xl'><FaRegEdit /></Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[425px] bg-slate-900 border-slate-900'>
                <DialogHeader>
                    <DialogTitle className='text-4xl text-white'>To-Do</DialogTitle>
                    <DialogDescription className='text-xl'>
                        Here is your to-do details...
                    </DialogDescription>
                </DialogHeader>
                <div className='space-y-4'>
                    <Input
                        id='title'
                        className='outline-none'
                        placeholder='Add Title'
                        defaultValue='To-Do Title'
                    />
                    <Textarea
                        id='description'
                        className='outline-none'
                        placeholder='Add Description'
                        defaultValue='your to-do details'
                    />
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button type='submit' variant='secondary'>
                            Update
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default ToDoEditModal;