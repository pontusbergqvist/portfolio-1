import React from 'react';
import Button from '../Button';

const Header = () => {
  return (
    <div className="text-primary dark:text-darkText w-full landscapeMax:h-[600px] min-h-[calc(100vh_-_100px)] relative px-3">
      <div className='relative h-full'>
        <header className='relative max-w-[960px] mx-auto'>
          <div className='absolute top-[45vh]'>
            <div className='my-4 leading-[1.2]'>
              <p className='inline-block relative font-dankMono dark:font-plexSerif dontUseGalaxyFold:text-[60px] md:text-heading text-headingSecondary after:content-[""] after:h-1/3 after:w-full after:bg-red-400 after:block after:absolute after:bottom-0 after:right-0 z-10 after:translate-y-[-50%] after:-z-10 after:skew-x-3 after:drop-shadow-xl'>Pontus</p><br />
              <p className='inline-block relative font-dankMono text-headingSecondary dontUseGalaxyFold:text-[60px] md:text-heading after:content-[""] after:h-1/3 after:w-full after:bg-red-400 after:block after:absolute after:bottom-0 after:right-0 z-10 after:translate-y-[-50%] after:-z-10 after:skew-x-3 after:drop-shadow-md'>Bergqvist</p>
            </div>
            <p className='hidden sm:block w-[80%] my-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus nemo error aut consectetur unde repellendus architecto ipsum minima natus debitis rerum corporis molestiae quasi ab.</p>
            <Button to="/work">View my work</Button>
          </div>

          {/* image */}
          <div className='h-[250px] w-[250px] smol:h-[350px] smol:w-[350px] md:h-[435px] md:w-[435px] border-2 border-gray-700 dark:border-darkText rounded-full top-[5vh] absolute sm:top-[15vh] sm:m-0 right-0'></div>
        </header>
      </div>
      <div className={`hidden larger:block absolute bottom-0 left-16 leading-[.7]`}>
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