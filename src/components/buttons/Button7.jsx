import { ArrowUpRight } from "lucide-react"


const Button7 = ({ h, w }) => {
  return (
    <button style={{ height: h, width: w }} className=" hover:text-fuchsia-500 hover:scale-95 transition-transform duration-300 flex justify-center items-center" >Button with icon <span><ArrowUpRight size={16} /></span></button>
  )
}

export default Button7