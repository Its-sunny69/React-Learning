import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        if (input.trim() == "") return;

        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <form onSubmit={addTodoHandler} className="flex justify-center w-3/5 my-7">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-xl px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="rounded-r-xl px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    )
}

export default AddTodo