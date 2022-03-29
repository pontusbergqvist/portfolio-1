import React from 'react';

const WorkGrid = () => {
  return (
    <div className='max-w-[1100px] -mt-32 mx-auto flex flex-col items-center text-primary'>
      <div className='grid grid-cols-2 gap-x-16 relative'>
        <img className='even:mt-20 shadow-xl cursor-pointer' src="https://www.laralee.design/wp-content/uploads/2020/03/blog-20200309-web-design-display-1-aare-paaatterns.png" alt="" />
        <img className='even:mt-20 shadow-xl cursor-pointer' src="https://www.laralee.design/wp-content/uploads/2020/03/blog-20200309-web-design-display-1-nick-tarasov-get-over-the-fear-of-waste.jpg" alt="" />
        <img className='even:mt-20 shadow-xl cursor-pointer' src="https://www.laralee.design/wp-content/uploads/2020/03/blog-20200309-web-design-display-1-nick-tarasov-get-over-the-fear-of-waste.jpg" alt="" />
        <img className='even:mt-20 shadow-xl cursor-pointer' src="https://www.laralee.design/wp-content/uploads/2020/03/blog-20200309-web-design-display-1-aare-paaatterns.png" alt="" />
      </div>
      <p className='mt-20 inline-block font-dankMono text-headingSecondary after:content-[""] relative after:h-1/3 after:w-full after:bg-red-400 after:block after:absolute after:bottom-0 after:right-0 z-10 after:translate-y-[-50%] after:-z-10 after:skew-x-3 after:drop-shadow-xl'>.. and more to come!</p>
    </div>
  )
}

export default WorkGrid;