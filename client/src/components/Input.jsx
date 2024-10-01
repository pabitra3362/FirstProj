import React from 'react'


function Input({
  label,
  className="",
  name,
  type="text",
  ...props
},ref) {


  return (
    <div className='flex gap-4 items-center mb-4'>
      {label && <div>
        <label className='text-white font-bold text-lg' htmlFor={label}>{label}:</label>
        </div>
    }
    <input type={type} id={label} name={name} className={`p-3 text-black text-lg rounded-lg font-bold ${className}`} {...props} ref={ref} required/>
    </div>
  )
}

export default React.forwardRef(Input)
