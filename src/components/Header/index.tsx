import { useState } from 'react';

import { List, X, Sun, Moon } from 'phosphor-react';

export function Header() {

  const links = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJETOS", link: "#projects" },
    { name: "CONTATO", link: "/" },
  ]

  const [menuMobile, setMenuMobile] = useState(false);
  const [theme, setTheme] = useState(false);

  function handleOpenMenuMobile() {
    setMenuMobile(!menuMobile);
  }

  function handleChangeToggleDarkMode() {
    const root = window.document.documentElement;
    if (theme === false) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    setTheme(!theme);
  }

  return (
    <header className='dark:shadow-[#5c5b5b] shadow-md w-full fixed top-0 left-0 z-50'>
      <nav className='md:flex items-center justify-between bg-[#EBEBEB] dark:bg-[#2C2C2C] dark:text-white text-[#F9A826] py-4 md:px-10 px-7'>
        <div className='dark:text-[#F9A826] text-[#2C2C2C] cursor-pointer flex items-center' onClick={handleChangeToggleDarkMode}>
          {theme ? <Sun size={32} weight='bold' /> : <Moon size={32} weight='bold' />}
        </div>

        <div className='text-3xl absolute right-8 top-4 cursor-pointer md:hidden' onClick={handleOpenMenuMobile}>
          {menuMobile ? <X weight='bold' /> : <List weight="bold" />}
        </div>

        <ul className={`
          md:flex md:items-center md:pb-0 pb-12 absolute md:static
          bg-[#EBEBEB] dark:bg-[#2C2C2C] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9      
          transition-[top,opacity] duration-[900ms] ease-in 
          ${menuMobile ? 'top-[4.3rem] opacity-100' : 'top-[-490px]  opacity-0'} 
          md:opacity-100
        `}>
          {links.map((link) => (
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7' onClick={handleOpenMenuMobile}>
              <a href={link.link} className='text-gray-800 dark:text-white dark:hover:text-[#F9A826] hover:text-[#F9A826] duration-500'>{link.name}</a>
            </li>
          ))}
        </ul>

      </nav>
    </header >
  )
}