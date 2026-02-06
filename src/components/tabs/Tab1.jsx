import { useState } from "react";
import { CopyCode } from "../CopyCode";
import { Tab1Code } from "../../assets/codeSnippets";

const Tab1 = () => {
  const [active, setActive] = useState(0);
  const tabs = [
    { title: "Problems", content: "problem content" },
    { title: "Output", content: "Output content" },
    { title: "Terminal", content: "Terminal content" },
  ];
  return (
    <div className="flex flex-col ">
    <div className="flex flex-col bg-gray-200 rounded-2xl p-4">
        <div className="flex flex-col justify-center">
            <div className="flex flex-row gap-3 ">
        {tabs.map((tab, i) => {
          return (
            <button className={` transition-transform duration-500`} onClick={() => setActive(i)} key={i}>
              {tab.title}
              
            </button>
          );
        })}
      </div>
      <span style={{ transform: `translateX(${active * (100)}%)`,width:`${20}%`}} className={`h-0.5 bg-purple-600 duration-300`}></span>
        </div>
      
      
      <div className="bg-purple-200 flex justify-center items-center p-6 min-h-40">{tabs[active].content}</div>
    </div><div className="flex w-full justify-center">
       <CopyCode code={Tab1Code}/>
    </div>
   
        </div>
  );
};

export default Tab1;
