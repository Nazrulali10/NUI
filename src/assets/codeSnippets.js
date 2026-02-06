export const Bento1Code = `
import React, { useState } from "react";

export const BentoGrid1 = () => {
  const [active, setActive] = useState(null);

  return (
    <div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(null)}
      className="w-full max-w-md mx-auto aspect-square bg-white rounded-2xl p-4"
    >
      <div className="grid grid-cols-3 grid-rows-3 gap-3 h-full">
        <div
          className={\`\${active ? "col-span-3 row-span-3" : "col-span-2 row-span-2"} transition-transform duration-600 hover:scale-95 bg-red-400 rounded-xl flex items-center justify-center\`}
        >
          Image 1
        </div>

        <div
          className={\`\${active ? "hidden" : "row-span-2 transition-transform duration-300 hover:scale-105 bg-sky-400 rounded-xl flex items-center justify-center"}\`}
        >
          2
        </div>

        <div className={\`\${active ? "hidden" : "bg-purple-400 rounded-xl flex items-center justify-center"}\`}>
          4
        </div>

        <div
          className={\`\${active ? "hidden" : "transition-transform duration-300 hover:scale-90 bg-yellow-400 rounded-xl flex items-center justify-center"}\`}
        >
          5
        </div>

        <div
          className={\`\${active ? "hidden" : "bg-orange-400 rounded-xl flex items-center justify-center"}\`}
        >
          6
        </div>
      </div>
    </div>
  );
};
`;

export const Carousel1Code = `import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";


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
          style={{ transform: \`translateX(-\${currentIndex * 100}%)\` }}
        >
          {colors.map((color, i) => {
            return (
              <div
                className={\` \${color} w-full flex h-56 rounded-2xl justify-center items-center shrink-0\`}
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
                return <button key={i} onClick={()=>setCurrentIndex(i)} className={\`\${currentIndex===i?'bg-purple-500 scale-100':'bg-purple-300 scale-95'} h-4 w-4 rounded-full hover:scale-90 duration-500\`} />
            })}
        </div>
        
    </div>
  );
};

export default Carousel1;`;

export const Carousel3Code = `import { useEffect, useState } from "react";

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
          style={{ transform: \`translateX(-\${currentIndex * 100}%)\` }}
        >
          {colors.map((color, i) => {
            return (
              <div
                className={\` \${color} w-full flex h-56 rounded-2xl justify-center items-center shrink-0\`}
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
                return <button key={i} onClick={()=>setCurrentIndex(i)} className={\`\${currentIndex===i?'bg-purple-500 scale-100':'bg-purple-300 scale-95'} h-4 w-4 rounded-full hover:scale-90 duration-500\`} />
            })}
        </div>
        
    </div>
  );
};

export default Carousel3;`;

export const Carousel2Code = `import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

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
      <div className="w-90 h-40 overflow-hidden ">
        <div
          className=" flex transition-transform duration-700 ease-in-out"
          style={{ transform: \`translateX(-\${currentIndex * 100/3}%)\` }}
        >
          {colors.map((color, i) => {
            return (
              <div
                className={\` \${color} \${currentIndex+1===i?'scale-x-100':'scale-80 opacity-80'} w-30 flex h-40 rounded-2xl justify-center items-center shrink-0\`}
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
                return <button  key={i} onClick={()=>setCurrentIndex(i)} className={\`\${currentIndex===i?'bg-purple-500 scale-100':'bg-purple-300 scale-95'} h-2 w-2 rounded-full hover:scale-90 duration-500\`} />
            })}
        </div>
        
    </div>
  );
};

export default Carousel2;


`;
export const Accordian1Code = `import { ChevronDown } from "lucide-react";
import { useState } from "react";
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
            className={\`\${isOpen ? "rotate-180" : "rotate-0"}\`}
            size={18}
          />
        </span>
      </button>

      <div
        className={\`\${isOpen ? "opacity-100 max-h-40" : "h-0 opacity-0"} text-purple-600 transition-all duration-500\`}
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
   
    </div>
  );
};

export default Accordian1;
`;

export const Accordian2Code = `import { ChevronDown } from "lucide-react";
import { useState } from "react";

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
      
    </div>
  );
};

export default Accordian2;
`;
export const Accordian3Code = `import { ChevronDown } from "lucide-react";
import { useState } from "react";

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
    </div>
  );
};

export default Accordian3;
`;
export const Tab1Code = `import { useState } from "react";
import { CopyCode } from "../CopyCode";

const Tab1 = () => {
  const [active, setActive] = useState(0);
  const tabs = [
    { title: "Problems", content: "problem content" },
    { title: "Output", content: "Output content" },
    { title: "Terminal", content: "Terminal content" },
  ];
  return (
    <div className="flex flex-col items-center">
    <div className="flex flex-col bg-gray-200 rounded-2xl p-4">
        <div className="flex flex-col justify-center">
            <div className="flex flex-row gap-3 ">
        {tabs.map((tab, i) => {
          return (
            <button className={\` transition-transform duration-500\`} onClick={() => setActive(i)} key={i}>
              {tab.title}
              
            </button>
          );
        })}
      </div>
      <span style={{ transform: \`translateX(\${active * (100)}%)\`,width:\`\${\${20}}%\` }} className={\`h-0.5 bg-purple-600 duration-300\`}></span>
        </div>
      
      
      <div className="bg-purple-200 flex justify-center items-center p-6 min-h-40">{tabs[active].content}</div>
    </div>
    <CopyCode code={Carousel1Code}/>
        </div>
  );
};

export default Tab1;
`;
export const Tab2Code = `import { useState } from "react";

const Tab2 = () => {
  const [active, setActive] = useState(0);
  const tabs = [
    { title: "Problems", content: "problem content" },
    { title: "Output", content: "Output content" },
    { title: "Terminal", content: "Terminal content" },
  ];
  return (
     <div className="flex flex-col justify-center">
    <div className="flex flex-col bg-gray-200 rounded-2xl p-4">
        <div className="flex flex-col">
            <div className="flex flex-row gap-4 ">
        {tabs.map((tab, i) => {
          return (
            <button className={\`\${\${active===i?'bg-purple-200 text-purple-800':''}} transition-transform duration-500 px-3 py-1 rounded-t-lg\`} onClick={() => setActive(i)} key={i}>
              {tab.title}
              
            </button>
          );
        })}
      </div>
     
        </div>
      
      
      <div className="bg-purple-200 flex justify-center items-center p-6 min-h-40">{tabs[active].content}</div>
    </div>
   
        </div>
  );
};

export default Tab2;
`
export const Bento2Code = `
export const BentoGrid2 = () => {
  return (
    <div className="flex flex-col items-center">
    <div className="w-full max-w-md mx-auto aspect-square bg-white rounded-2xl p-4">
      <div className="grid grid-cols-3 grid-rows-3 gap-3 h-full">
        <div className="h-full w-full col-span-2 row-span-2 [perspective:1000px]">
          <div className="relative h-full w-full duration-900 transition-transform [transform-style:preserve-3d] hover:[transform:rotateX(180deg)]">
            <div className="bg-purple-300 rounded-xl flex items-center justify-center absolute inset-0 [backface-visibility:hidden]">
              Front-side
            </div>
            <div className="bg-purple-300 rounded-xl flex items-center justify-center absolute inset-0 [backface-visibility:hidden] [transform:rotateX(180deg)]">
              Back-side
            </div>
          </div>
        </div>

        <div className="row-span-1 transition-transform duration-300 bg-purple-200 rounded-xl flex items-center justify-center">
          2
        </div>

        <div className="bg-purple-400 rounded-xl flex items-center justify-center">
          4
        </div>
        <div className="transition-transform duration-300 col-span-3 hover:scale-90 bg-purple-500 rounded-xl flex items-center justify-center">
          5
        </div>
      </div>
    </div>
    
        </div>
  );
};
`
export const Bento3Code = `
export const BentoGrid3 = () => {
  return (
    <div className="flex flex-col items-center">
    <div className="w-full max-w-md mx-auto aspect-square bg-white rounded-2xl p-4">
      <div className="grid grid-cols-3 grid-rows-3 gap-3 h-full">

        <div className="transition-transform duration-300 bg-purple-600 hover:scale-105 col-span-2 rounded-xl flex items-center justify-center">1</div>
        <div className="row-span-2 transition-transform duration-300 hover:scale-105 bg-purple-700 rounded-xl flex items-center justify-center">2</div>
        <div className="bg-purple-500 col-span-2 duration-300 hover:scale-105 rounded-xl flex items-center justify-center">3</div>
        <div className="bg-purple-800 rounded-xl duration-300 hover:scale-95 flex items-center justify-center">4</div>
        <div className="transition-transform duration-300 hover:scale-90 bg-purple-900 rounded-xl flex items-center justify-center">5</div>

        <div className="grid grid-cols-2 grid-rows-2 rounded-xl gap-3">
          <div className="bg-purple-700 duration-300 rounded-xl flex items-center hover:scale-105 justify-center">6</div>
          <div className="duration-300 hover:scale-105 bg-purple-700 rounded-xl flex items-center justify-center">7</div>
          <div className="bg-purple-700 rounded-xl flex items-center hover:scale-105 justify-center">8</div>
          <div className="bg-purple-700 duration-300 rounded-xl flex hover:scale-105 items-center justify-center">9</div>
        </div>

      </div>
    </div>
    
        </div>
  );
};
`
export const Menu1Code = `import { useEffect, useRef, useState } from "react";

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
          <button className={\`\${opened===i?' text-purple-600':''} w-12 \`}  onClick={() => setOpened(opened === i ? null : i)}>
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
  );
};

export default Menu1;
`
export const Menu2Code = `import { useEffect, useRef, useState } from "react";

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
          <button onMouseEnter={()=>setOpened(i)}  className={\`\${opened===i?' text-purple-600':''} w-12 \`}  onClick={() => setOpened(opened === i ? null : i)}>
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
    
            </div>
  );
};

export default Menu2;
`
export const Button1Code = `

const Button1 = ({ h, w }) => {
  return (
    <button style={{ height: h, width: w }} className=" hover:text-purple-500 hover:scale-95 transition-transform duration-300" >Text</button>
  )
}

export default Button1`

export const Button2Code = `

const Button2 = ({ h, w }) => {
  return (
    <button style={{ height: h, width: w }} className='text-white bg-purple-500 rounded-xl px-2 py-2 hover:bg-purple-600 transition-colors duration-300'>contained</button>
  )
}

export default Button2`

export const Button3Code = `

const Button3 = ({ h, w }) => {
  return (
    <button style={{ height: h, width: w }} className='text-purple-600 hover:text-white hover:bg-purple-500 rounded-xl px-2 py-2 border border-purple-500 transition-colors duration-300'>Outlined</button>
  )
}
export default Button3`

export const Button4Code = `import React from 'react'

const Button4 = ({ h, w }) => {
  return (
    <button style={{ height: h, width: w }} className='text-violet-800 hover:bg-violet-200 rounded-xl px-2 py-2  transition-colors duration-300'>Text</button>
  )
}

export default Button4`

export const Button5Code = `

const Button5 = ({ h, w }) => {
  return (
    <button style={{ height: h, width: w }} className='text-violet-200 hover:text-violet-800 hover:bg-violet-300 bg-violet-600  rounded-xl px-2 py-2 transition-colors duration-300'>Contained</button>
  )
}

export default Button5`

export const Button5_2Code = `const Button5_2 = ({ h, w }) => {
  return (
    <button style={{ height: h, width: w }} className='text-fuchsia-300 bg-fuchsia-700 hover:scale-95 duration-300 transition-transform rounded-xl px-2 py-2 hover:shadow-2xl'>Contained</button>
  )
}

export default Button5_2`

export const Button5_3Code = `const Button5_3 = ({h,w}) => {
  return (
     <button style={{height:h , width:w}} className='text-purple-800 hover:text-purple-200 bg-purple-300 hover:bg-purple-700  rounded-xl px-2 py-2 transition-colors duration-300'>Contained</button>
  )
}

export default Button5_3`

export const Button6Code = `import React from 'react'

const Button6 = ({ h, w }) => {
  return (
    <button style={{ height: h, width: w }} className='text-violet-800 hover:bg-violet-200 rounded-xl px-2 py-2 border border-violet-800 transition-colors duration-300'>Outlined</button>
  )
}

export default Button6`

export const Button6_2Code = `import React from 'react'

const Button6_2 = ({ h, w }) => {
  return (
    <button style={{ height: h, width: w }} className='text-fuchsia-500  hover:text-fuchsia-700 rounded-xl px-2 py-2 border border-fuchsia-500 transition-colors hover:border-2 hover:border-fuchsia-700 duration-300'>Outlined</button>
  )
}

export default Button6_2`

export const Button7Code = `import { ArrowUpRight } from "lucide-react"


const Button7 = ({ h, w }) => {
  return (
    <button style={{ height: h, width: w }} className=" hover:text-fuchsia-500 hover:scale-95 transition-transform duration-300 flex justify-center items-center" >Button with icon <span><ArrowUpRight size={16} /></span></button>
  )
}

export default Button7`

export const Button8Code = `
import { ArrowUpRight } from "lucide-react"
const Button8 = ({ h, w }) => {
  return (
    <button style={{ height: h, width: w }} className='text-purple-200 hover:text-purple-800 gap-1 hover:bg-purple-300 bg-purple-600  rounded-xl px-2 py-2 transition-colors duration-300 flex justify-center items-center'>Explore<span><ArrowUpRight size={16} /></span></button>
  )
}

export default Button8`

export const Button8_2Code = `import { LoaderCircle } from "lucide-react"




const Button8_2 = ({ h, w }) => {
  return (
    <button style={{ height: h, width: w }} className='text-fuchsia-200 bg-fuchsia-600  rounded-xl px-2 py-2 transition-colors duration-300 flex justify-center items-center gap-1'>Publish<span className="animate-spin"><LoaderCircle size={16} /></span></button>
  )
}

export default Button8_2`

