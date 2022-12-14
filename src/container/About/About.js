import React from 'react';
import './About.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
const abouts = [
  { title: 'Frontend Developer', description: 'I am a frontend developer with a passion for building beautiful and functional web applications', imgURL: images.about01 },
  { title: 'Computer Engineer', description: 'I have completed my Engineering from ZHCET-AMU in 2022', imgURL: images.amu },
  { title: 'React Developer', description: 'I can build React Apps', imgURL: images.about03 }
]

const About = () => {
  
  return (
    <div id="about" className='app__about'>
      <h2 className='head-text about__description'>
        Things aren't always <span> #000000 </span><br /> and <span> #FFFFFF</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgURL} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  "app__whitebg"
  );