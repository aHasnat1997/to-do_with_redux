import { RiDeleteBin6Line } from "react-icons/ri";
import ToDoDetailsModal from "./ToDoDetailsModal";
import ToDoEditModal from "./ToDoEditModal";
import { Button } from "../ui/button";

function ToDoList() {
    const toDoesList = [1, 2, 3, 4, 5, 6, 7, 8]

    return (
        <section className="w-full h-full bg-black/50 py-16">
            <h2 className="text-4xl font-semibold text-white text-center">Your To-Do List</h2>
            <div className="w-full h-fit lg:h-[80%] mt-8 px-4 lg:px-16 space-y-4 overflow-scroll no-scrollbar">
                {
                    toDoesList.length === 0 ?
                        <h3 className="text-center text-white text-2xl">No To-Do added...</h3> :
                        toDoesList.map((item) => <div
                            key={item}
                            className="pb-2 text-2xl text-white flex gap-4 border-b"
                        >
                            <input type="checkbox" />
                            <ul className="w-full flex justify-between">
                                <li>Title</li>
                                <li>Create at</li>
                                <li>Status</li>
                                <li className="flex">
                                    <ToDoDetailsModal />
                                    <ToDoEditModal />
                                    <Button variant='ghost' className="text-2xl"><RiDeleteBin6Line /></Button>
                                </li>
                            </ul>
                        </div>)
                }
            </div>
        </section>
    );
}

export default ToDoList;