import React from 'react'

const Display = (props) => {
  return (
    <div style={{
        backgroundColor: `${props.count}`
    }} 
    className='w-full h-[300px] mt-9 rounded-3xl border-2 content-center'>
      <h1 className='text-black text-[4px]'>{props.count.toUpperCase()}</h1>
    </div>
  )
}

export default Display
