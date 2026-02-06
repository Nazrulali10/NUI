import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { CopyCode } from "../CopyCode";
import { Carousel1Code } from "../../assets/codeSnippets";

const Carousel1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const colors = ["bg-purple-200", "bg-red-200", "bg-green-200"];
  const leftClick = () => {
    if (currentIndex === 0) return;
    setCurrentIndex((prev) => prev - 1);
  };
  const rightClick = () => {
    if (currentIndex === colors.length - 1) return;
    setCurrentIndex((prev) => prev + 1);
  };
  return (
    <div className="flex flex-col items-center">
        <div className="flex items-center gap-2">
            <button
        onClick={leftClick}
        className="flex justify-center items-center bg-purple-700 text-white rounded-full px-2 py-2 h-8 w-8 hover:opacity-80"
      >
        <span>
          <ChevronLeft size={12} />
        </span>
      </button>
      <div className="w-44 h-56 overflow-hidden ">
        <div
          className=" flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {colors.map((color, i) => {
            return (
              <div
                className={` ${color} w-full flex h-56 rounded-2xl justify-center items-center shrink-0`}
                key={i}
              >
                {i}
              </div>
            );
          })}
          
        </div>
      </div>
      <button
        onClick={rightClick}
        className="flex justify-center items-center bg-purple-700 text-white rounded-full  px-2 py-2 h-8 w-8 hover:opacity-80"
      >
        <span>
          <ChevronRight size={12} />
        </span>
      </button>
        </div>
        <div className="flex gap-1 justify-center items-center w-full mt-5">
            {colors.map((_,i)=>{
                return <button key={i} onClick={()=>setCurrentIndex(i)} className={`${currentIndex===i?'bg-purple-500 scale-100':'bg-purple-300 scale-95'} h-4 w-4 rounded-full hover:scale-90 duration-500`} />
            })}
        </div>
        <CopyCode code={Carousel1Code}/>
    </div>
  );
};

export default Carousel1;


