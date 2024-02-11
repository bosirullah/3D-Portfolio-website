import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  const [isMobile,setIsMobile] = useState(false);

  useEffect(() =>{
    const mediaQuery = window.matchMedia('(max-width: 481px)');
    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) =>{
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change',handleMediaQueryChange);

    return () =>{
      mediaQuery.removeEventListener('change',handleMediaQueryChange);
    }

  },[])

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm-h-80 h-80 violet-gradient"/>
        </div>

        <div>
          <h1 className={`${isMobile ? styles.heroSmHeadText :styles.heroHeadText} text-white`} >
            Hi, I'm <span className='text-[#915eff]'>{`${isMobile ? "Md Bosir" : "Md Bosirullah"}`}</span>
          </h1>
          <p className={`${isMobile ? styles.heroSmSubText : styles.heroSubText} mt-2 text-white-100`}>
            I develop full stack Decentralised Applications,<br className='sm:block hidden'/> User Interfaces 
            and web applications
          </p>
        </div>
      </div>
      
      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4
          border-secondary flex justify-center items-start p-2">
            <motion.div 
              animate={{
                y: [0,24,0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero