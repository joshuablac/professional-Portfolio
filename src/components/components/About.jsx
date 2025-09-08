import React from 'react';
import { Tilt } from 'react-tilt';
import { motion, scale } from 'framer-motion';
import { SectionWrapper } from '../../hoc/index';
import { styles } from '../../style';
import { services } from '../../constants';
import { fadeIn, textVariant } from '../../utils/motion';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='md:w-[250px] w-full  flex justify-center items-center place-content-center'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className=' w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5  px-12 min-h-[280px] flex justify-evenly items-center flex-col text-center'
        >
          <img src={icon} alt={title} />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <div className=' gap-10 w-full'>
      <div className='flex gap-10'>
        <div className='h-80 w-5'></div>
        <div>
          <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText}`}>Introduction</p>
            <h2 className={`${styles.sectionHeadText}`}>Overview</h2>
          </motion.div>
          <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className='mt-4 flex flex-col text-secondary text-[17px] leading-[30px] max-w-3xl'
          >
            I'm a skilled software developer with experience in TypeScript and
            JavaScript, and expertise in max-w-3frameworks like React, Node.js,
            and Express.js. I'm a quick learner and collaborate closely
            with clients to create efficient, scalable, and user-friendly
            solutions that solve real-world problems. Let's max-w-3work together
            to bring your ideas to life!
          </motion.p>
        </div>
</div>
        <div className='flex flex-col justify-center items-center place-content-center w-full'>
          
          <div className='mt-20 flex flex-wrap gap-10 justify-center items-center'>
            {services.map((service, index) => (
              <ServiceCard {...service} key={service.title} index={index} />
            ))}
          </div>
        </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
