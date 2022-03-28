import React from 'react';

const VerticalLine = ({ scroll, top, right, bottom, left, length }) => {
  return (
    <div className={`absolute top-[${top || ''}] right-[${right || ''}] bottom-[${bottom || ''}] left-[${left || ''}] leading-[.7]`}>
      {scroll ? <p className='absolute bottom-[50px] font-dankMono rotate-[270deg] right-[-15px]'>scroll</p> : ''}
      <div className={`h-[${length || ''}] w-[1px] bg-black flex flex-col items-center`}>
        <span className='text-red-800 mt-[100px]'>▽</span>
        <span className='text-red-800'>▽</span>
        <span className='text-red-800'>▽</span>
      </div>
    </div>
  )
}

export default VerticalLine; 