import { Button } from "../Button"

import { LinkedinLogo, GithubLogo } from 'phosphor-react';
import Avatar from '../../assets/avatar.png';

export function About() {
  return (
    <section className="bg-[#ebebeb] dark:bg-[#2C2C2C] md:h-screen">
      <div id="about" className="md:max-w-[1344px] md:mx-auto md:pt-20 pt-16 md:px-16 px-7 flex flex-col items-center md:flex-row md:gap-12">

        <div className="mt-8 w-40 h-40 md:w-80 md:h-80 bg-black  rounded-full flex-shrink-0 overflow-hidden">
          <img src="https://github.com/Iann-rst.png" alt="" />
        </div>

        <div className="flex flex-col items-center md:items-start md:mt-5 dark:text-white">
          <h2 className="my-20 text-4xl font-bold md:my-0 md:mb-10">Sobre mim</h2>

          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae maxime,
            sapiente unde placeat, laudantium recusandae doloremque,
            quibusdam ipsam fugit reprehenderit! Alias, amet. Eligendi ducimus sequi vel dolorem, necessitatibus id.
          </p>

          <div className="flex gap-4 mt-24 mb-4">
            <Button title="GitHub">
              <GithubLogo weight="bold" />
            </Button>

            <Button title="LinkedIn">
              <LinkedinLogo weight="bold" />
            </Button>
          </div>

        </div>
      </div>
    </section>

  )
}