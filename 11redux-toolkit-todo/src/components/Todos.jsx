import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50   text-black`}
        >
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} className='flex justify-between'>
                        <div className='text-black w-full'>{todo.text}</div>
                        <button
                            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                            onClick={() => dispatch(removeTodo(todo.id))}
                        >
                            ❌
                        </button>
                    </li>
                ))}

            </ul>

        </div>

    )
}

export default Todos