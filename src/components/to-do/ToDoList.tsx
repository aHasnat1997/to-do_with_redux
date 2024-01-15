import { RiDeleteBin6Line } from "react-icons/ri";
import ToDoDetailsModal from "./ToDoDetailsModal";
import ToDoEditModal from "./ToDoEditModal";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/redux/hooks";
import { TToDo, removeToDo, toggleToDoStatus } from "@/redux/features/toDoes";
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";
import { useGetAllToDoesQuery } from "@/redux/services/toDose";

function ToDoList() {
    //! for local state
    // const toDoesList = useAppSelector((state) => state.toDoes);
    //! for api state
    const { data: toDoesList, isError, isLoading } = useGetAllToDoesQuery(undefined);
    console.log('ToDoList error ==> ', isError);

    const dispatch = useAppDispatch();

    const timeOptions: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric', hour12: true, day: 'numeric', month: 'numeric', year: 'numeric' };

    return (
        <section className="w-full h-full bg-black/50 py-16">
            <h2 className="text-4xl font-semibold text-white text-center">Your To-Do List</h2>
            {
                isLoading ? <h1>Loading...</h1> :
                    <div className="w-full h-fit lg:h-[80%] mt-8 px-4 lg:px-16 space-y-4 overflow-scroll no-scrollbar">
                        {
                            !toDoesList ?
                                <h3 className="text-center text-white text-2xl">No To-Do added...</h3> :
                                toDoesList.map((item: TToDo) => <div
                                    key={item.id}
                                    className="pb-2 text-2xl text-white flex gap-4 border-b"
                                >
                                    <Button
                                        className="p-0 bg-transparent hover:bg-transparent text-2xl"
                                        onClick={() => dispatch(toggleToDoStatus(item.id as string))}
                                    >
                                        {item.status ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}
                                    </Button>
                                    <ul className="w-full flex justify-between">
                                        <li>{item.title}</li>
                                        <li>{new Intl.DateTimeFormat('en-US', timeOptions).format(new Date(item.createdAt))}</li>
                                        <li>{item.status ? 'done' : 'pending'}</li>
                                        <li className="flex">
                                            <ToDoDetailsModal title={item.title} description={item.description} />
                                            <ToDoEditModal title={item.title} description={item.description} />
                                            <Button
                                                variant='ghost'
                                                className="text-2xl"
                                                onClick={() => dispatch(removeToDo(item.id as string))}
                                            >
                                                <RiDeleteBin6Line />
                                            </Button>
                                        </li>
                                    </ul>
                                </div>)
                        }
                    </div>
            }
        </section>
    );
}

export default ToDoList;