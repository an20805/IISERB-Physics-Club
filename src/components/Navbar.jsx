import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'

const Navbar = () => {

  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center pt-5 pb-3 top-0 sticky bg-black z-20 shadow-md shadow-[#38f1bc]`}>

      <div className='w-full flex justify-between items-center max-w-screen-2xl mx-auto '>

        <Link
          to="/"
          className='flex items-center gap2'
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt='logo' className='h-[100px] object-contain' />
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10 relative'>

          <div className='absolute inset-0 gradient-02 top-6' />

          {
            navLinks.map((link) => (
              <li
                key={link.id}
                className={`${active === link.title ? "text-teal-400" : "text-teal-800"
                  } hover:text-emerald-400 text-[20px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <Link to={`${link.id}`}>{link.title}</Link>
              </li>
            ))
          }
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center relative'>
          <div className='absolute inset-0 gradient-02' />
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}>

            <ul className='list-none flex justify-end items-start flex-col gap-4 '>

              {
                navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${active === link.title ? "text-black" : "text-teal-800"
                      } hover:text-black font-poppins text-[16px] font-medium cursor-pointer`}
                    onClick={() => {
                      setToggle(!toggle)
                      setActive(link.title)
                    }}
                  >
                    <Link to={`#${link.id}`}>{link.title}</Link>
                  </li>
                ))
              }
            </ul>

          </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar