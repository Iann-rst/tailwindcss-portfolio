interface Props {
  title: string;
  children?: React.ReactNode;

}
export function Button({ title, children }: Props) {

  const rs = title === 'GitHub' ? 'https://github.com/Iann-rst' : 'https://www.linkedin.com/in/iann-rodrigues-b71b9220a/'


  return (
    <button className="w-36 h-14 bg-orange-400 hover:bg-orange-300 text-white font-bold transition-all duration-500 rounded-lg">
      <a className="font-bold text-xl flex items-center justify-center gap-4" href={rs} target="_blank">
        {children}
        {title}
      </a>
    </button>
  )
}