import React from 'react';

const Work = () => {
  return (
    <div className='max-w-[1400px] mx-auto px-5 my-20 flex flex-col items-center'>
      <div className='flex items-center w-full my-5'>
        <h2 className='font-dankMono text-headingTertiary'>Featured projects</h2>
        <span className='h-[1px] ml-4 w-[30px] dark:bg-darkText block'></span>
      </div>
      <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 gap-x-16 relative'>
        <img className='shadow-xl cursor-pointer rounded-md' src="https://www.laralee.design/wp-content/uploads/2020/03/blog-20200309-web-design-display-1-aare-paaatterns.png" alt="" />
        <img className='shadow-xl cursor-pointer rounded-md' src="https://www.laralee.design/wp-content/uploads/2020/03/blog-20200309-web-design-display-1-nick-tarasov-get-over-the-fear-of-waste.jpg" alt="" />
        <img className='shadow-xl cursor-pointer rounded-md' src="https://www.laralee.design/wp-content/uploads/2020/03/blog-20200309-web-design-display-1-nick-tarasov-get-over-the-fear-of-waste.jpg" alt="" />
        <img className='shadow-xl cursor-pointer rounded-md' src="https://www.laralee.design/wp-content/uploads/2020/03/blog-20200309-web-design-display-1-aare-paaatterns.png" alt="" />
      </div>
    </div>
  )
}

export default Work;

/*  <div className='my-40 text-center'>
      <div className='max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-3'>
        <div className='order-last md:order-none mt-3 text-left'>
          <p className='relative inline-block after:content-[""] after:w-[50px] after:bg-primary after:dark:bg-darkText after:h-[1px] after:absolute after:top-1/2 after:right-0 after:translate-x-[70px]'>Featured project</p>
          <h2 className='font-dankMono text-headingSecondary md:text-heading'>Project name</h2>
          <Tags tags={['Gatsby', 'React', 'JavaScript']} />
          <Link to="">Project Details</Link>
        </div>
        <img className='max-w-full h-auto rounded-md' src="https://www.laralee.design/wp-content/uploads/2020/03/blog-20200309-web-design-display-1-nick-tarasov-get-over-the-fear-of-waste.jpg" alt="" />
      </div>
      <div className='max-w-[600px] md:max-w-[1200px] mx-auto flex flex-col items-center text-primary dark:text-darkText px-3 my-40'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 gap-x-16 relative'>
          <img className='md:even:mt-20 shadow-xl cursor-pointer rounded-md' src="https://www.laralee.design/wp-content/uploads/2020/03/blog-20200309-web-design-display-1-aare-paaatterns.png" alt="" />
          <img className='md:even:mt-20 shadow-xl cursor-pointer rounded-md' src="https://www.laralee.design/wp-content/uploads/2020/03/blog-20200309-web-design-display-1-nick-tarasov-get-over-the-fear-of-waste.jpg" alt="" />
          <img className='md:even:mt-20 shadow-xl cursor-pointer rounded-md' src="https://www.laralee.design/wp-content/uploads/2020/03/blog-20200309-web-design-display-1-nick-tarasov-get-over-the-fear-of-waste.jpg" alt="" />
          <img className='md:even:mt-20 shadow-xl cursor-pointer rounded-md' src="https://www.laralee.design/wp-content/uploads/2020/03/blog-20200309-web-design-display-1-aare-paaatterns.png" alt="" />
        </div>
        <p className='mt-40 inline-block font-dankMono text-headingTertiary md:text-headingSecondary after:content-[""] relative after:h-1/3 after:w-full after:bg-red-400 after:block after:absolute after:bottom-0 after:right-0 z-10 after:translate-y-[-50%] after:-z-10 after:skew-x-3 after:drop-shadow-xl'>.. and more to come!</p>
      </div>
    </div> */