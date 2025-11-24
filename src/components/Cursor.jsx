import React, { forwardRef } from 'react'

const Cursor = forwardRef((props,ref) => {
  return (
    <div ref={ref} className='bg-white h-[30px] w-[30px] rounded-full fixed'></div>
  )
})

export default Cursor