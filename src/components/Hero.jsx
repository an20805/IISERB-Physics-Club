import React from 'react'
import { prism, coil } from '../assets'
import { styles } from '../styles'
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto z-10'>
      <div className={` h-fit relative`}>
        <img src={coil} className='w-2/3 float-right' />
        <p className={`${styles.heroSubText} px-10 absolute top-32`}>Welcome to</p>
        <p className={`${styles.heroHeadText} px-10 absolute top-40`}>IISERB <span className='text-[#38f1bc]'>Physics</span></p>
        <p className={`${styles.heroHeadText} px-10 absolute top-60`}>Club</p>
      </div>
      <div className={`relative flex justify-center w-full`}>
        <div className='absolute inset-0 gradient-02 ' />
        <p className='w-1/2 text-2xl pt-2 text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>
  )
}

export default Hero

