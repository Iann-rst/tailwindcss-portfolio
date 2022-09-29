import { useState } from 'react';

export function Header() {
  const [menuMobile, setMenuMobile] = useState(false);

  function handleOpenMenuMobile() {
    setMenuMobile(!menuMobile);
  }

  return (
    <header>
      <nav
        className={`bg-slate-800 text-white py-7 flex items-center justify-around ${menuMobile ? 'h-screen' : ''}`}>

        <div className="absolute md:top-8 top-4 left-4" >
          toggle
        </div>

        <ul className={`${menuMobile ? 'flex flex-col items-center text-4xl gap-20' : 'hidden'} md:text-lg md:flex md:gap-10`}>
          <li>
            <a href="#about" className="hover:text-orange-400">
              Sobre mim
            </a>
          </li>
          <li>
            <a href="" className="hover:text-orange-400">
              Projetos
            </a>
          </li>

          <li>
            <a href="" className="hover:text-orange-400">
              Skills
            </a>
          </li>

          <li>
            <a href="" className="hover:text-orange-400">
              Contatos
            </a>
          </li>
        </ul>

        <button onClick={handleOpenMenuMobile} className="md:hidden absolute top-4 right-4">
          <div className="w-10 h-1 bg-orange-400 mb-1"></div>
          <div className="w-10 h-1 bg-orange-400 mb-1"></div>
          <div className="w-10 h-1 bg-orange-400 mb-1"></div>
        </button>
      </nav >


    </header >
  )
}