import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../../style';
import { SectionWrapper } from '../../hoc';
import { fadeIn, textVariant } from '../../utils/motion';
import { testimonials } from '../../constants';

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn('', 'spring', index * 0.5, 0.75)}
    className='bg-black-200 h-90 rounded-3xl md:w-[320px] w-full'
  >
    <div className='flex'>
      <div className='h-50 w-6'></div>
      <div className='flex flex-col p-10 min-h-[280px] gap-7'>
        <p className='text-white font-black text-[48px]'>"</p>
        <p className='text-white tracking-wider text-[18px] max-w-[220px] '>
          {testimonial}
        </p>

        <div className='mt-7 flex justify-between items-center gap-1 '>
          <div className='flex-1 flex flex-col gap-2'>
            <p className='blue-text-gradient font-medium text-[16px]'>
              <span>@</span> {name}
            </p>
            <p className='text-secondary text-[12px]'>
              {designation} of {company}
            </p>
          </div>
          <img src={image} alt={`feedback-by-${name}`} className='w-10 h-10 rounded-full object-cover' />
        </div>
      </div>
    </div>
  </motion.div>
);
const Feedbacks = () => {
  return (
    <div className='mt-12 rounded-[20px] relative w-full bg-black-100 min-h-[850px] '>
      <div className='w-full h-50 bg-primary'></div>
      <div
        className={` rounded-2xl ${styles.padding} relative`}
      >
        <div className='min-h-[300px] bg-tertiary w-full rounded-2xl flex items-center '>
          <div className='w-20 h-50'></div>
          <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
        </div>
        
        <div
        className={
          `${styles.paddingX} absolute top-55 lg:left-0  mx-auto w-full gap-4  pb-14 -mt-20  flex flex-wrap md:gap-7 justify-center items-center`
        }
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
      </div>
      
    </div>
  );
};

export default SectionWrapper(Feedbacks, 'feedbacks');
