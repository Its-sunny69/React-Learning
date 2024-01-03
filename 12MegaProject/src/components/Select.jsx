import React, { useId } from 'react'

function Select({
    label,
    options,
    className,
    ...props

}, ref) {
    const id = useId()

    return (
        <div className='w-full'>
            {label && <label htmlFor={id} className=''></label>}
            <select
                {...props}
                id={id}
                ref={ref}
                className={`border border-gray-300 w-full`}
            >
                {options?.map((option) =>
                    <option key={option} value={option}>
                        {option}
                    </option>
                )}
            </select>
        </div>
    )
}

export default React.forwardRef(Select)