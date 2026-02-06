import { LoaderCircle } from "lucide-react"




const Button8_2 = ({ h, w }) => {
  return (
    <button style={{ height: h, width: w }} className='text-fuchsia-200 bg-fuchsia-600  rounded-xl px-2 py-2 transition-colors duration-300 flex justify-center items-center gap-1'>Publish<span className="animate-spin"><LoaderCircle size={16} /></span></button>
  )
}

export default Button8_2