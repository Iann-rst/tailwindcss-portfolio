import { skills } from "../../utils/skills"

export function Skills() {
  return (
    <section id="skills" className='bg-white md:h-auto'>
      <div className="md:max-w-[1344px] md:mx-auto md:pt-20 pt-16 md:px-16 px-7 flex flex-col items-center">
        <h1 className="text-4xl text-center font-bold">Tecnologias</h1>
        <div className="flex items-center justify-center flex-wrap mt-20 mb-6">
          {
            skills.map((skill) => (
              <div key={skill.name} className="w-40 h-52 p-8 m-6 bg-white dark:bg-zinc-600 shadow-lg flex flex-col items-center">
                <img className="w-20 h-20" src={skill.svg} alt="" />
                <p className="mt-10 font-bold text-center">{skill.name}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}