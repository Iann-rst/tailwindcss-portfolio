import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

import nlwEsportLogo from '../../assets/img-projetos/nlw-esport.svg';
import originSixLogo from '../../assets/img-projetos/origin-six.svg';
import rentX from '../../assets/img-projetos/rentX.svg';
import goFinances from '../../assets/img-projetos/gofinances.svg';
import proffy from '../../assets/img-projetos/proffy.svg';
import rocketHelp from '../../assets/img-projetos/rocketHelp.svg';

export function Projects() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
  },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 5000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  );
  return (
    <section id="projects" className='bg-[#ebebeb]'>
      <div className="md:max-w-[1344px] md:mx-auto h-screen md:pt-20 pt-16 md:px-16 px-7 flex items-center flex-col">
        <h1 className="text-4xl font-bold">Meus Projetos</h1>

        <div ref={ref} className="keen-slider mt-20 min-w-[320px] py-10">

          <div className="keen-slider__slide number-slide1 px-2 flex flex-col items-center">
            <h1 className='text-base md:text-3xl font-bold text-center'>NLW eSports</h1>
            <a href="" target="_blank" title="NLW ESPORTS">
              < img className="min-w-[304px] w-auto h-80" src={nlwEsportLogo} alt="" />
            </a >
          </div >

          <div className="keen-slider__slide number-slide2 px-2 flex flex-col items-center">
            <h1 className='text-base md:text-3xl font-bold text-center'>Origin Six</h1>
            <a title="Origin Six" href="">
              <img className="min-w-[304px] w-auto h-80" src={originSixLogo} alt="" />
            </a>
          </div>

          <div className="keen-slider__slide number-slide3 flex flex-col items-center px-2">
            <h1 className='text-base md:text-3xl font-bold text-center'>RentX - app para locação de carros.</h1>
            <a title="Origin Six" href="">
              <img className="min-w-[304px] w-auto h-80" src={rentX} alt="" />
            </a>
          </div>

          <div className="keen-slider__slide number-slide4 flex flex-col items-center px-2">
            <h1 className='text-base md:text-3xl font-bold  text-center'>GoFinances - app de controle de gastos pessoais</h1>
            <a title="Origin Six" href="">
              <img className="min-w-[304px] w-auto h-80" src={goFinances} alt="" />
            </a>
          </div>

          <div className="keen-slider__slide number-slide5 flex flex-col items-center px-2">
            <h1 className='text-base md:text-3xl font-bold  text-center'>Proffy - Plataforma de estudos online</h1>
            <a title="Origin Six" href="">
              <img className="min-w-[304px] w-auto h-80" src={proffy} alt="" />
            </a>
          </div>

          <div className="keen-slider__slide number-slide6 flex flex-col items-center px-2">
            <h1 className='text-base md:text-3xl font-bold  text-center'>Rocket Help - Gerencie solicitações de suporte a equipamentos.</h1>
            <a title="Origin Six" href="">
              <img className="min-w-[304px] w-auto h-80" src={rocketHelp} alt="" />
            </a>
          </div>
        </div >
      </div >
    </section >
  )
}