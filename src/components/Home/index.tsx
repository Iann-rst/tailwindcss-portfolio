import Logo from '../../assets/logo-home.svg';

export function Home() {
  return (
    <section id="home" className="md:flex-row-reverse md:justify-between h-screen bg-black text-white md:pt-20 pt-16 md:px-10 px-7 flex flex-col items-center">

      <div className="mt-10 md:mt-5">
        <img className="md:w-[600px] md:h-[784px]" src={Logo} alt="" />
      </div>

      <div className="md:mt-0 md:gap-2 flex flex-col items-center gap-1 mt-2">
        <span className="text-2xl">Meu nome é</span>
        <h1 className="text-4xl font-bold text-stone-500">Iann Rodrigues</h1>
        <span className="text-xl text-center">Desenvolvedor Front-end e Mobile</span>

        <button className="mt-2 bg-orange-400 w-72 h-16 rounded-md hover:bg-orange-300 font-bold">
          FALE COMIGO
        </button>
      </div>
    </section>
  )
}