import Link from 'next/link';
import { ModeToggle } from './theme-toggle'
import { RiGithubFill, RiNextjsFill } from "react-icons/ri";

export function Header() {
  return (
    <header className="p-5">
      <nav className="flex items-center justify-between">
          <RiNextjsFill className='hover:text-muted-foreground' size={24}/>
        <div className=' flex gap-3 items-center'>
          <ModeToggle />
          <Link href='https://github.com/Hunde-D/Next-template '>
            <RiGithubFill size={24} className='hover:text-muted-foreground'/>
          </Link>
        </div>
      </nav>
    </header>
  )
}

