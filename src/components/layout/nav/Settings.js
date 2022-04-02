import React from 'react';
import DarkmodeButton from './DarkmodeButton';
import { BsFillGearFill } from 'react-icons/bs'

const Settings = ({ active }) => {
  return (
    <div className={`${active ? 'flex' : 'hidden'} items-center absolute left-0 md:right-0 md:left-auto px-3`}>
      <DarkmodeButton />
      <BsFillGearFill className='ml-5 cursor-pointer text-primary dark:text-darkText transition-transform ' />
    </div>
  )
}

export default Settings;