import { LinkedinLogo, GithubLogo, WhatsappLogo, EnvelopeSimple } from 'phosphor-react';

export function Footer() {
  return (
    <footer className="h-20 w-full flex justify-center items-center">
      <div>
        <ul className='flex gap-4'>
          <li>
            <a className="hover:text-blue-500 hover:cursor-pointer" href="https://www.linkedin.com/in/iann-rodrigues-b71b9220a/" target="_blank">
              <LinkedinLogo size="32" weight='bold' />
            </a>
          </li>
          <li>
            <a className='hover:text-green-500 hover:cursor-pointer' href="https://web.whatsapp.com/send?phone=+5577999138868" target="_blank">
              <WhatsappLogo size="32" weight='bold' />
            </a>
          </li>
          <li>
            <a className="hover:text-red-500 hover:cursor-pointer" href="mailto:iannrst11@gmail.com" target="_blank">
              <EnvelopeSimple size="32" weight='bold' />
            </a>
          </li>
          <li>
            <a className="hover:text-yellow-500 hover:cursor-pointer" href="https://github.com/Iann-rst" target="_blank">
              <GithubLogo size="32" weight='bold' />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}