import React from 'react';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='max-w-[1400px] h-[720px] mx-auto flex flex-col justify-center font-dankMono text-primary  dark:text-darkText before:content-[""] before:h-[2px] before:w-[350px] before:block before:bg-primary   before:mb-5 before:dark:bg-darkText'>
      <p className='font-verdana'>Get in touch..</p>
      <p className='text-headingSecondary'>email: pontus@bergqvist.io</p>
      <p className='text-headingSecondary'>github: pontusbergqvist</p>
      <div className='flex items-center text-headingSecondary'><p className='mr-3'>&#47;&#47;</p><FaLinkedin className='mr-3 cursor-pointer hover:text-[#4875B4]' /> <FaTwitter className='cursor-pointer hover:text-[#33CCFF]' /></div>
    </footer>
  )
}

export default Footer;