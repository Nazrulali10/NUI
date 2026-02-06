// import { useState } from "react";
// import { CopyCode } from "../CopyCode";
// import { Bento1Code } from "../../assets/codeSnippets";

// export const BentoGrid1 = () => {
//   const [active, setActive] = useState(null);
//   return (
//     <div>
//       <div
//         onMouseEnter={() => setActive(true)}
//         onMouseLeave={() => setActive(null)}
//         className="w-full max-w-md mx-auto aspect-square bg-white rounded-2xl p-4"
//       >
//         <div className="grid grid-cols-3 grid-rows-3 gap-3 h-full">
//           <div
//             className={`${active ? "col-span-3 row-span-3" : "col-span-2 row-span-2"} transition-transform duration-600 hover:scale-95 bg-red-400 col-span-2 row-span-2 rounded-xl flex items-center justify-center`}
//           >
//             Image 1
//           </div>
//           <div
//             className={`${active ? "hidden" : " row-span-2 transition-transform duration-300 hover:scale-105 bg-sky-400  rounded-xl flex items-center justify-center"} `}
//           >
//             2
//           </div>

//           <div
//             className={`${active ? "hidden" : "bg-purple-400 rounded-xl flex items-center justify-center"} `}
//           >
//             4
//           </div>
//           <div
//             className={`${active ? "hidden" : "transition-transform duration-300 hover:scale-90 bg-yellow-400 rounded-xl flex items-center justify-center"} `}
//           >
//             5
//           </div>

//           <div
//             className={`${active ? "hidden" : "bg-orange-400 rounded-xl flex items-center justify-center"} `}
//           >
//             6
//           </div>
//         </div>
//       </div>
//       <CopyCode code={Bento1Code} />
//     </div>
//   );
// };
import { useState } from "react";
import { CopyCode } from "../CopyCode";
import { Bento1Code } from "../../assets/codeSnippets";

export const BentoGrid1 = () => {
  const [active, setActive] = useState(null);
  return (
    <div className="flex flex-col items-center">
      <div
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(null)}
        className="w-full max-w-80 mx-auto aspect-square bg-white rounded-2xl p-4"
      >
        <div className="grid grid-cols-3 grid-rows-3 gap-3 h-full">
          <div
            className={`${active ? "col-span-3 row-span-3" : "col-span-2 row-span-2"} transition-transform duration-600 hover:scale-95 bg-purple-400 col-span-2 row-span-2 rounded-xl flex items-center justify-center`}
          >
            Image 1
          </div>
          <div
            className={`${active ? "hidden" : " row-span-2 transition-transform duration-300 hover:scale-105 bg-purple-300  rounded-xl flex items-center justify-center"} `}
          >
            2
          </div>

          <div
            className={`${active ? "hidden" : "bg-purple-500 rounded-xl flex items-center justify-center"} `}
          >
            4
          </div>
          <div
            className={`${active ? "hidden" : "transition-transform duration-300 hover:scale-90 bg-purple-600 rounded-xl flex items-center justify-center"} `}
          >
            5
          </div>

          <div
            className={`${active ? "hidden" : "bg-purple-700 rounded-xl flex items-center justify-center"} `}
          >
            6
          </div>
        </div>
      </div>
      <CopyCode code={Bento1Code} />
    </div>
  );
};
