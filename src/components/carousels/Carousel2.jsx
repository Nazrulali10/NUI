import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { CopyCode } from "../CopyCode";
import { Carousel2Code } from "../../assets/codeSnippets";

const Carousel2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const colors = ["bg-pink-200","bg-gray-200", "bg-red-200", "bg-green-200","bg-amber-200","bg-indigo-200","bg-yellow-200","bg-blue-200"];
  const leftClick = () => {
    if (currentIndex === 1) return;
    setCurrentIndex((prev) => prev - 1);
  };
  const rightClick = () => {
    if (currentIndex === colors.length - 3) return;
    setCurrentIndex((prev) => prev + 1);
  };
  return (
    <div className="flex flex-col items-center">
        <div className="flex items-center gap-1">
            <button
        onClick={leftClick}
       className="flex justify-center items-center text-purple-700 font-extrabold rounded-full  px-2 py-2 h-6 w-6 hover:opacity-80"
      >
        <span>
          <ChevronLeft size={22} />
        </span>
      </button>
      <div className="w-60 md:w-90 h-30 md:h-40 overflow-hidden ">
        <div
          className=" flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100/3}%)` }}
        >
          {colors.map((color, i) => {
            return (
              <div
                className={` ${color} ${currentIndex+1===i?'scale-x-100':'scale-80 opacity-80'} w-20 md:w-30 flex h-30 md:h-40 rounded-2xl justify-center items-center shrink-0`}
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
        className="flex justify-center items-center text-purple-700 font-extrabold rounded-full  px-2 py-2 h-6 w-6 hover:opacity-80"
      >
        <span>
          <ChevronRight size={22} />
        </span>
      </button>
        </div>
        <div className="flex gap-1 justify-center items-center w-full mt-5">
            {colors.map((_,i)=>{
                return <button  key={i} onClick={()=>setCurrentIndex(i)} className={`${currentIndex===i?'bg-purple-500 scale-100':'bg-purple-300 scale-95'} h-2 w-2 rounded-full hover:scale-90 duration-500`} />
            })}
        </div>
        <CopyCode code={Carousel2Code}/>
    </div>
  );
};

export default Carousel2;


