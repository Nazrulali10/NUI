import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Accordian2Code } from "../../assets/codeSnippets";
import { CopyCode } from "../CopyCode";

const Accordian = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(null);
  return (
    <div className="flex flex-col 
    p-4 text-left gap-1">
      <button
        className="group text-gray-800 flex justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className="text-purple-500 group-hover:text-purple-800">
          <ChevronDown size={18} />
        </span>
      </button>

      {isOpen && <div className="   text-purple-500 mt-5">{children}</div>}
    </div>
  );
};

const Accordian2 = () => {
  return (
     <div className="flex flex-col items-center">
    <div className="bg-purple-100 p-4 gap-2 flex flex-col text-left">
       <Accordian title="Which city is known as the IT hub of India?">
       Bengaluru is known as the IT hub due to its large tech and startup ecosystem.
      </Accordian>
      <Accordian title="Which state is famous for the Backwaters?">
      Kerala is famous for its scenic backwaters and houseboat tourism.
      </Accordian>
     
      
    </div>
      <CopyCode code={Accordian2Code}/>
          </div>
  );
};

export default Accordian2;
