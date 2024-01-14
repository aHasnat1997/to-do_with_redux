import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit, FaEye } from "react-icons/fa";

function ToDoList() {
    return (
        <section className="w-full h-full bg-black/50 py-16">
            <h2 className="text-4xl text-white text-center">Your To-Do List</h2>
            <div className="w-full mt-8 px-16 space-y-4">
                {
                    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => <div
                        key={item}
                        className="pb-2 text-2xl text-white flex gap-4 border-b"
                    >
                        <input type="checkbox" />
                        <ul className="w-full flex justify-between">
                            <li>Title</li>
                            <li>Create at</li>
                            <li>Status</li>
                            <li className="flex gap-4">
                                <FaEye />
                                <FaRegEdit />
                                <RiDeleteBin6Line />
                            </li>
                        </ul>
                    </div>)
                }
            </div>
        </section>
    );
}

export default ToDoList;