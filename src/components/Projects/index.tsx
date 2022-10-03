import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

import nlwEsportLogo from '../../assets/img-projetos/nlw-esport.svg';
import originSixLogo from '../../assets/img-projetos/origin-six.svg';
import rentX from '../../assets/img-projetos/rentX.svg';


export function Projects() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
  },

  );
  return (
    <section id="projects" className='bg-[#ebebeb]'>
      <div className="md:max-w-[1344px] md:mx-auto h-screen md:pt-20 pt-16 md:px-16 px-7 flex items-center flex-col">
        <h1 className="text-4xl font-bold">Meus Projetos</h1>

        <div ref={ref} className="keen-slider mt-20 min-w-[320px] py-10">

          <div className="keen-slider__slide number-slide1 px-2 flex flex-col items-center">
            <h1 className='text-3xl font-bold mb-4'>NLW eSports</h1>
            <a href="" target="_blank" title="NLW ESPORTS">
              < img className="min-w-[304px] w-auto h-80" src={nlwEsportLogo} alt="" />
            </a >
          </div >

          <div className="keen-slider__slide number-slide2 px-2 flex flex-col items-center">
            <h1 className='text-3xl font-bold mb-4'>Origin Six</h1>
            <a title="Origin Six" href="">
              <img className="min-w-[304px] w-auto h-80" src={originSixLogo} alt="" />
            </a>
          </div>
          <div className="keen-slider__slide number-slide3 flex flex-col items-center px-2">
            <h1 className='text-3xl font-bold mb-4'>Projeto 3</h1>
            <a title="Origin Six" href="">
              <img className="min-w-[304px] w-auto h-80" src={originSixLogo} alt="" />
            </a>
          </div>
          <div className="keen-slider__slide number-slide4 flex flex-col items-center px-2">
            <h1 className='text-3xl font-bold mb-4'>Projeto 4</h1>
            <a title="Origin Six" href="">
              <img className="min-w-[304px] w-auto h-80" src={originSixLogo} alt="" />
            </a>
          </div>
        </div >
      </div >
    </section >
  )
}