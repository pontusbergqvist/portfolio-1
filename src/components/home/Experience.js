import React from 'react';

const Experience = () => {
  return (
    <article className='max-w-[1364px] px-5 mx-auto'>
      <div className='flex items-center'>
        <h2 className='font-plexSerif text-heading'>Experience</h2>
        <span className='h-[2px] ml-5 mt-3 w-full bg-primary block'></span>
      </div>
      <div className='max-w-[1090px] mx-auto flex justify-between mt-5'>
        <section className='w-1/2'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fugit vel ad deserunt ipsum voluptas doloremque placeat dolorem, autem possimus quidem error aliquid reiciendis tenetur, ex inventore, optio nostrum iure.</p><br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ratione sunt cupiditate deleniti voluptas voluptatem. Fugit totam minus recusandae ratione.</p><br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni aliquam alias nam voluptatem ex ut nulla accusantium dolor temporibus illo mollitia consectetur, cumque repellendus dolore molestias, esse quibusdam enim blanditiis?</p>
        </section>
        <section>
          <h3 className='font-plexSerif text-[30px]'>Work</h3>
          <div className='my-10'>
            <p className='italic'>2022 -</p>
            <p className='text-headingSecondary font-plexSerif'>Back-end developer</p>
            <p className='font-semibold'>Arbetsplats</p>
            <p>Gothenburg, Sweden</p>
          </div>
          <div className='my-10'>
            <p className='italic'>2020 - 2022</p>
            <p className='text-headingSecondary font-plexSerif'>Front-end developer</p>
            <p className='font-semibold'>En Annan Arbetsplats</p>
            <p>Gothenburg, Sweden</p>
          </div>
          <h3 className='font-plexSerif text-[30px]'>Education</h3>
          <div className='my-10'>
            <p className='italic'>2018 - 2020</p>
            <p className='text-headingSecondary font-plexSerif'>Webmaster, 120hp</p>
            <p className='font-semibold'>Högskolan Väst</p>
            <p>Trollhättan, Sweden</p>
          </div>

        </section>
      </div>
    </article>
  )
}

export default Experience