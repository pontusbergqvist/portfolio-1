import React from 'react';
import ExperienceList from './ExperienceList';

const Experience = () => {
  return (
    <article className='max-w-[1400px] px-5 mx-auto text-primary dark:text-darkText'>
      <div className='flex items-center w-full'>
        <h2 className='font-plexSerif text-headingSecondary md:text-heading'>Experience</h2>
        <span className='h-[2px] ml-4 w-full bg-primary dark:bg-darkText block'></span>
      </div>
      <div className='max-w-[1090px] mx-auto grid grid-cols-1 large:grid-cols-2 gap-10 mt-5'>
        <section className=''>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fugit vel ad deserunt ipsum voluptas doloremque placeat dolorem, autem possimus quidem error aliquid reiciendis tenetur, ex inventore, optio nostrum iure.</p><br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ratione sunt cupiditate deleniti voluptas voluptatem. Fugit totam minus recusandae ratione.</p><br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni aliquam alias nam voluptatem ex ut nulla accusantium dolor temporibus illo mollitia consectetur, cumque repellendus dolore molestias, esse quibusdam enim blanditiis?</p>
        </section>
        <ExperienceList />
      </div>
    </article>
  )
}

export default Experience 