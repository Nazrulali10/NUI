import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Accordian3Code } from "../../assets/codeSnippets";
import { CopyCode } from "../CopyCode";

const Accordian = ({ title,index,openedIndex,setOpenedIndex, children }) => {
  let isOpen = index === openedIndex
  const handleClick = ()=>{
    setOpenedIndex(isOpen?null:index)
  }
  return (
    <div className="flex flex-col bg-purple-200 rounded-2xl border border-purple-500
    p-4 text-left gap-1">
      <button
        className="group text-gray-800 flex justify-between text-left"
        onClick={handleClick}
      >
        {title}
        <span className="text-purple-500 group-hover:text-purple-800">
          <ChevronDown size={18} />
        </span>
      </button>

      {isOpen && <div className="text-purple-600 mt-2">{children}</div>}
    </div>
  );
};

const Accordian3 = () => {
    const [openedIndex,setOpenedIndex] = useState(null)
  return (
    <div className="flex flex-col items-center">
    <div className="bg-purple-100 p-4 gap-2 flex flex-col text-left">
        <Accordian index={0} openedIndex={openedIndex} setOpenedIndex={setOpenedIndex} title="Which city is known as the “Tea City” of India?">
       Assam
      </Accordian>
      <Accordian index={2} openedIndex={openedIndex} setOpenedIndex={setOpenedIndex} title="Which river is the longest in India?">
         Ganga River
      </Accordian>
      <Accordian index={3} openedIndex={openedIndex} setOpenedIndex={setOpenedIndex} title="What is India’s national flower?">
        Lotus Flower
      </Accordian>
    </div>
    <CopyCode code={Accordian3Code}/>
              </div>
  );
};

export default Accordian3;

