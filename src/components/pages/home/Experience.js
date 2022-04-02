import React from 'react';

const Experience = () => {
  return (
    <article className='max-w-[1364px] px-5 mx-auto text-primary dark:text-darkText'>
      <div className='flex items-center'>
        <h2 className='font-plexSerif text-headingSecondary md:text-heading'>Experience</h2>
        <span className='h-[2px] ml-5 mt-3 w-full bg-primary dark:bg-darkText block'></span>
      </div>
      <div className='max-w-[1090px] mx-auto grid grid-cols-1 large:grid-cols-2 gap-10 mt-5'>
        <section className=''>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fugit vel ad deserunt ipsum voluptas doloremque placeat dolorem, autem possimus quidem error aliquid reiciendis tenetur, ex inventore, optio nostrum iure.</p><br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ratione sunt cupiditate deleniti voluptas voluptatem. Fugit totam minus recusandae ratione.</p><br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni aliquam alias nam voluptatem ex ut nulla accusantium dolor temporibus illo mollitia consectetur, cumque repellendus dolore molestias, esse quibusdam enim blanditiis?</p>
        </section>
        <section>
          <h3 className='font-plexSerif text-headingTertiary underline'>Work</h3>
          <div className='my-10'>
            <p className='italic'>2022 -</p>
            <p className='text-headingTertiary md:text-headingSecondary font-plexSerif'>Back-end developer</p>
            <p className='font-semibold'>Arbetsplats</p>
            <p>Gothenburg, Sweden</p>
          </div>
          <div className='my-10'>
            <p className='italic'>2020 - 2022</p>
            <p className='text-headingTertiary md:text-headingSecondary font-plexSerif'>Front-end developer</p>
            <p className='font-semibold'>En Annan Arbetsplats</p>
            <p>Gothenburg, Sweden</p>
          </div>
          <h3 className='font-plexSerif text-headingTertiary underline'>Education</h3>
          <div className='my-10'>
            <p className='italic'>2018 - 2020</p>
            <p className='text-headingTertiary md:text-headingSecondary font-plexSerif'>Webmaster, 120hp</p>
            <p className='font-semibold'>Högskolan Väst</p>
            <p>Trollhättan, Sweden</p>
          </div>
        </section>
      </div>
    </article>
  )
}

export default Experience 