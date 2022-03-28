import React from 'react';
import VerticalLine from './VerticalLine';

const Header = () => {
  return (
    <div className="text-primary w-full h-[calc(100vh_-_70px)] relative">
      <div className='relative h-full'>
        <header className='relative w-[960px] mx-auto'>
          <div className='absolute top-[40vh]'>
            <div className='flex flex-col my-4 leading-[1.2]'>
              <p className='font-dankMono text-heading underline'>Pontus</p>
              <p className='font-dankMono text-heading underline'>Bergqvist</p>
            </div>
            <p className='w-[80%] my-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus nemo error aut consectetur unde repellendus architecto ipsum minima natus debitis rerum corporis molestiae quasi ab.</p>
            <button className='border-2 font-dankMono border-primary p-3 rounded-full hover:underline'>View my work</button>
          </div>
          <div className='min-h-[435px] h-[435px] w-[435px] min-w-[435px] border-2 border-gray-700 rounded-full absolute top-[15vh] left-[60%]'></div>
        </header>
      </div>
      <VerticalLine scroll={true} left="4rem" bottom="0" length="400px" coords={{ left: '4rem', bottom: '0', length: '400px' }} />
    </div>
  )
}

export default Header;