import { Bento2Code } from "../../assets/codeSnippets";
import { CopyCode } from "../CopyCode";

export const BentoGrid2 = () => {
  return (
    <div className="flex flex-col items-center">
    <div className="w-full max-w-80 mx-auto aspect-square bg-white rounded-2xl p-4">
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
    <CopyCode code={Bento2Code} />
        </div>
  );
};
