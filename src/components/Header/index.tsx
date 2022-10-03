import { useState } from 'react';

import { List, X } from 'phosphor-react';

export function Header() {

  const links = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJETOS", link: "#projects" },
    { name: "CONTATO", link: "/" },
  ]

  const [menuMobile, setMenuMobile] = useState(false);


  function handleOpenMenuMobile() {
    setMenuMobile(!menuMobile);
  }

  return (
    <header className='shadow-md w-full fixed top-0 left-0 z-50'>
      <nav className='md:flex items-center justify-between bg-[#EBEBEB] dark:bg-[#2C2C2C] dark:text-white text-[#F9A826] py-4 md:px-10 px-7'>
        <div className='cursor-pointer flex items-center'>
          <span className='mr-1 '>logo</span>
          Dev. Front-end
        </div>

        <div className='text-3xl absolute right-8 top-4 cursor-pointer md:hidden' onClick={handleOpenMenuMobile}>
          {menuMobile ? <X weight='bold' /> : <List weight="bold" />}
        </div>

        <ul className={`
          md:flex md:items-center md:pb-0 pb-12 absolute md:static
          bg-[#EBEBEB] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9      
          transition-all duration-[900ms] ease-in 
          ${menuMobile ? 'top-[3.8rem] opacity-100' : 'top-[-490px]  opacity-0'} 
          md:opacity-100
        `}>
          {links.map((link) => (
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7' onClick={handleOpenMenuMobile}>
              <a href={link.link} className='text-gray-800 hover:text-[#F9A826] duration-500'>{link.name}</a>
            </li>
          ))}
        </ul>

      </nav>
    </header >
  )
}