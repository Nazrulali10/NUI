import { useEffect, useRef, useState } from "react";
import { Menu1Code } from "../../assets/codeSnippets";
import { CopyCode } from "../CopyCode";

const Menu1 = () => {
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
    <div ref={MenuRef} className="flex justify-batween px-[20%] rounded-xl bg-gray-200">
      {menu.map((men, i) => (
        <div key={i} className="relative  px-4">
          <button className={`${opened===i?' text-purple-600':''} w-12 `}  onClick={() => setOpened(opened === i ? null : i)}>
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
    <CopyCode code={Menu1Code} />
        </div>
  );
};

export default Menu1;
