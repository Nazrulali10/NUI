import {SunMedium} from 'lucide-react'
import { handleClick } from './buttons/ExploreButton'

const NavBar = () => {
  return (
    <div className='flex w-full bg-purple-50 justify-between px-6 md:px-28 py-6'>
        <h1 className='bg-gradient-to-r from-violet-800  to-indigo-700 text-transparent bg-clip-text font-bold text-3xl'>NUI</h1>
        <div className='flex gap-2 md:gap-6 justify-center items-center'>
            <button onClick={handleClick} className='text-gray-500 text-md hover:text-purple-500 active:text-purple-500'>Components</button>
            <button className='flex justify-center items-center bg-purple-100 text-purple-800 rounded-full h-8 w-8  '><SunMedium size={18} /></button>
        </div>
    </div>
  )
}

export default NavBar