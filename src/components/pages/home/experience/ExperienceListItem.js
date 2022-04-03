import React from 'react';

const ExperienceListItem = ({ title, workplace, city, country, startYear, endYear = '' }) => {
  return (
    <div className='bg-slate-200 dark:bg-slate-700 p-5 rounded-md leading-relaxed tracking-wider'>
      <p className='font-dankMono'>{`${startYear} - ${endYear}`}</p>
      <p className='text-headingTertiary font-plexSerif mb-2'>{title}</p>
      <p className='font-semibold'>{workplace}</p>
      <p>{`${city}, ${country}`}</p>
    </div>
  )
}

export default ExperienceListItem;