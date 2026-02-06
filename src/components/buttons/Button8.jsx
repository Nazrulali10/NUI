
import { ArrowUpRight } from "lucide-react"
const Button8 = ({ h, w }) => {
  return (
    <button style={{ height: h, width: w }} className='text-purple-200 hover:text-purple-800 gap-1 hover:bg-purple-300 bg-purple-600  rounded-xl px-2 py-2 transition-colors duration-300 flex justify-center items-center'>Explore<span><ArrowUpRight size={16} /></span></button>
  )
}

export default Button8