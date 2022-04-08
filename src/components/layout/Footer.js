import React from 'react';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='max-w-[1400px] h-[430px] px-3 mx-auto flex flex-col justify-center font-dankMono text-primary  dark:text-darkText before:content-[""] before:h-[2px] before:w-[80%] before:max-w-[350px] before:block before:bg-primary before:mb-5 before:dark:bg-darkText'>
      <p className='font-verdana my-5 sm:m-0'>Get in touch..</p>
      <p className='text-body dontUseGalaxyFold:text-headingTertiary md:text-headingSecondary my-2'>email: pontus@bergqvist.io</p>
      <p className='text-body dontUseGalaxyFold:text-headingTertiary md:text-headingSecondary my-2'>github: pontusbergqvist</p>
      <div className='flex items-center text-headingTertiary'><p className='mr-3'>&#47;&#47;</p><FaLinkedin className='mr-3 cursor-pointer hover:text-[#4875B4]' /> <FaTwitter className='cursor-pointer hover:text-[#33CCFF]' /></div>
    </footer>
  )
}

export default Footer;
