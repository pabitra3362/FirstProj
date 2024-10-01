import React from 'react'

function Button({
    type = 'submit',
    className,
    name="",
    ...props
}
    
) {
    return (
        <div>
            <button type={type} className={`py-4 mb-3 text-white rounded-lg hover:bg-blue-400 text-lg font-bold ${className}`} {...props}>{name}</button>
        </div>
    )
}

export default Button
