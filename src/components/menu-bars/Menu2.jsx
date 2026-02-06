import { useEffect, useRef, useState } from "react";
import { Menu2Code } from "../../assets/codeSnippets";
import { CopyCode } from "../CopyCode";

const Menu2 = () => {
  const [opened, setOpened] = useState(null);
  const menu = [
    {
      title: "File",
      options: ["New File", "Open", "Save"],
    },
    {
      title: "Edit",
      options: ["Undo", "Cut", "Copy", "Paste"],
    },
    {
      title: "View",
      options: ["Zoom In", "Zoom Out"],
    },
  ];
  const MenuRef = useRef(null);
  useEffect(() => {
    const handleClick = (e) => {
      if (!MenuRef.current.contains(e.target)) {
        setOpened(null);
      }
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
     <div className="flex flex-col items-center">
    <div  ref={MenuRef} className=" px-[20%] ">
        <div onMouseLeave={()=>setOpened(null)} className="bg-gray-200 flex">
      {menu.map((men, i) => (
        <div key={i} className="relative  px-4">
          <button onMouseEnter={()=>setOpened(i)}  className={`${opened===i?' text-purple-600':''} w-12 `}  onClick={() => setOpened(opened === i ? null : i)}>
            {men.title}
          </button>

          {opened === i && (
            <div className="absolute flex flex-col">
              {men.options.map((opt, j) => (
                <button key={j} className=" text-left text-xs  text-nowrap p-2 bg-gray-200 hover:bg-gray-300">
                  {opt}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
      </div>
    </div>
    <CopyCode code={Menu2Code} />
            </div>
  );
};

export default Menu2;
