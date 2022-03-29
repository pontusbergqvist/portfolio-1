import React from 'react';

const Header = () => {
  return (
    <div className="text-primary dark:text-darkText w-full h-[calc(100vh_-_70px)] relative">
      <div className='relative h-full'>
        <header className='relative w-[960px] mx-auto'>
          <div className='absolute top-[40vh]'>
            <div className='my-4 leading-[1.2]'>
              <p className='inline-block relative font-dankMono dark:font-plexSerif text-heading after:content-[""] after:h-1/3 after:w-full after:bg-red-400 after:block after:absolute after:bottom-0 after:right-0 z-10 after:translate-y-[-50%] after:-z-10 after:skew-x-3 after:drop-shadow-xl'>Pontus</p><br />
              <p className='inline-block relative font-dankMono text-heading after:content-[""] after:h-1/3 after:w-full after:bg-red-400 after:block after:absolute after:bottom-0 after:right-0 z-10 after:translate-y-[-50%] after:-z-10 after:skew-x-3 after:drop-shadow-md'>Bergqvist</p>
            </div>
            <p className='w-[80%] my-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus nemo error aut consectetur unde repellendus architecto ipsum minima natus debitis rerum corporis molestiae quasi ab.</p>
            <button className='border-2 font-dankMono border-primary dark:border-darkText p-3 rounded-full hover:underline'>View my work</button>
          </div>
          <div className='min-h-[435px] h-[435px] w-[435px] min-w-[435px] border-2 border-gray-700 dark:border-darkText rounded-full absolute top-[15vh] left-[60%]'></div>
        </header>
      </div>
      <div className={`absolute bottom-0 left-16 leading-[.7]`}>
        <p className='absolute bottom-[50px] font-dankMono rotate-[270deg] right-[-15px]'>scroll</p>
        <div className={`h-[400px] w-[1px] bg-primary dark:bg-darkText flex flex-col items-center`}>
          <span className='text-red-500 mt-[100px]'>▽</span>
          <span className='text-red-500'>▽</span>
          <span className='text-red-500'>▽</span>
        </div>
      </div>
    </div>
  )
}

export default Header; 