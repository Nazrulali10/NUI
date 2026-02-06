import { useEffect, useState } from "react";
import { CopyCode } from "../CopyCode";
import { Carousel3Code } from "../../assets/codeSnippets";

const Carousel3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const colors = ["bg-purple-200", "bg-red-200", "bg-green-200"];

  useEffect(()=>{
    const interval = setInterval(()=>{
        setCurrentIndex(prev=>(prev+1)%colors.length)
    },3000)
    return ()=>clearInterval(interval)
  },[])

  return (
    <div className="flex flex-col items-center">
        <div className="flex items-center gap-2">
          
      <div className="w-76 h-56 overflow-hidden ">
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
     
        </div>
        <div className="flex gap-1 justify-center items-center w-full mt-5">
            {colors.map((_,i)=>{
                return <button key={i} onClick={()=>setCurrentIndex(i)} className={`${currentIndex===i?'bg-purple-500 scale-100':'bg-purple-300 scale-95'} h-4 w-4 rounded-full hover:scale-90 duration-500`} />
            })}
        </div>
        <CopyCode code={Carousel3Code}/>
    </div>
  );
};

export default Carousel3;


