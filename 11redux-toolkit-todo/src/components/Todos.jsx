import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
import { MdDelete } from "react-icons/md";

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    return (
        <div className=" w-3/5 flex border border-black/10 rounded-xl px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 text-black"
        >
            <ul className='w-full'>
                {todos.map((todo) => (

                    <li key={todo.id}
                        className='flex justify-between items-center border-b-2 px-2'>

                        <div className='text-black w-full'>
                            {todo.text}
                        </div>

                        <button className="inline-flex w-8 h-8 text-xl justify-center items-center hover:scale-125 shrink-0"
                            onClick={() => dispatch(removeTodo(todo.id))}>
                            <MdDelete />
                        </button>
                    </li>
                ))}

            </ul>

        </div>

    )
}

export default Todos