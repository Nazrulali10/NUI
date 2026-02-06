import { useState } from "react";
import { Tab2Code } from "../../assets/codeSnippets";
import { CopyCode } from "../CopyCode";

const Tab2 = () => {
  const [active, setActive] = useState(0);
  const tabs = [
    { title: "Problems", content: "problem content" },
    { title: "Output", content: "Output content" },
    { title: "Terminal", content: "Terminal content" },
  ];
  return (
     <div className="flex flex-col items-center">
    <div className="flex flex-col bg-gray-200 rounded-2xl p-4">
        <div className="flex flex-col">
            <div className="flex flex-row gap-4 ">
        {tabs.map((tab, i) => {
          return (
            <button className={`${active===i?'bg-purple-200 text-purple-800':''} transition-transform duration-500 px-3 py-1 rounded-t-lg`} onClick={() => setActive(i)} key={i}>
              {tab.title}
              
            </button>
          );
        })}
      </div>
     
        </div>
      
      
      <div className="bg-purple-200 flex justify-center items-center p-6 min-h-40">{tabs[active].content}</div>
    </div>
    <CopyCode code={Tab2Code}/>
        </div>
  );
};

export default Tab2;

