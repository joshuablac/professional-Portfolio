import React from 'react';
import { BallCanvas } from './canvas';
import { technologies } from '../../constants';
import { SectionWrapper } from '../../hoc';

const Tech = () => {
  return (
    <>
      {' '}
      <div>
        <div className='w-1 h-30 text-center'></div>
        <div className=' w-full mx-auto flex justify-center'>
          <div className='flex flex-row flex-wrap  justify-center gap-10 max-w-5xl '>
            {technologies.map((technology) => (
            <div className='w-28 h-28' key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
          </div>
          
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
