import React from 'react';
import ExperienceListItem from './ExperienceListItem';

const ExperienceList = () => {
  return (
    <section className=''>
      <h2 className='font-dankMono text-headingTertiary my-2 first:mt-0'>Work</h2>
      <article className='grid grid-cols-1 gap-y-10'>
        <ExperienceListItem title='Back-end developer' workplace='Arbetsplats' city='Gothenburg' country='Sweden' startYear='2022' />
        <ExperienceListItem title='Front-end developer' workplace='En annan arbetsplats' city='Gothenburg' country='Sweden' startYear='2020' endYear='2022' />
      </article>
      <h2 className='font-dankMono text-headingTertiary my-2 mt-12'>Education</h2>
      <article className='grid grid-cols-1 gap-y-10'>
        <ExperienceListItem title='Webmaster, 120hp' workplace='Högskolan Väst' city='Trollhättan' country='Sweden' startYear='2018' endYear='2020' />
      </article>
    </section>
  )
}

export default ExperienceList;