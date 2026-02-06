import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { CopyCode } from "../CopyCode";
import { Accordian1Code } from "../../assets/codeSnippets";

const Accordian = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(null);
  return (
    
    <div className="flex flex-col bg-purple-200 rounded-2xl p-4 text-left gap-1">
      <button
        className="group text-gray-800 flex justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className="text-purple-500 group-hover:text-purple-800 transition-transform duration-500">
          <ChevronDown
            className={`${isOpen ? "rotate-180" : "rotate-0"}`}
            size={18}
          />
        </span>
      </button>

      <div
        className={`${isOpen ? "opacity-100 max-h-40" : "h-0 opacity-0"} text-purple-600 transition-all duration-500`}
      >
        {children}
      </div>
    </div>
    
  );
};

const Accordian1 = () => {
  return (
    <div className="flex flex-col items-center">
    <div className="bg-purple-100 p-4 gap-2 flex flex-col text-left">
      <Accordian title="Which country is called “Land of Smiles”?">
        Thailand
      </Accordian>
      <Accordian title="Which country has the largest desert?">
        Antarctica
      </Accordian>
      <Accordian title="Which country invented pizza?">Italy</Accordian>
    </div>
    <CopyCode code={Accordian1Code}/>
    </div>
  );
};

export default Accordian1;
