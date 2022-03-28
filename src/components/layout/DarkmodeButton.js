import React, { useState } from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

const DarkmodeButton = () => {
  const [active, setActive] = useState(false)
  return (
    <div aria-hidden className='relative flex items-center w-[60px] h-[28px] border-2 bg-primary border-primary rounded-full cursor-pointer' onClick={() => setActive(!active)}>
      <div className={`absolute top-1/2 translate-y-[-50%] left-[31px] text-yellow-400 ${active && 'translate-x-[-27px]'}`}>
        {active ? <BsFillSunFill /> : <BsFillMoonFill />}
      </div>
      <div
        className={`absolute h-[28px] w-[28px] border-2 left-[-2px] bg-secondary border-primary rounded-full top-1/2 translate-y-[-50%] transition-transform duration-300 ease-out ${active && 'translate-x-[32px]'}`}
      ></div>
    </div>
  )
}

export default DarkmodeButton;