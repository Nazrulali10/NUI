import { Bento3Code } from "../../assets/codeSnippets";
import { CopyCode } from "../CopyCode";

export const BentoGrid3 = () => {
  return (
    <div className="flex flex-col items-center">
    <div className="w-full max-w-80 mx-auto aspect-square bg-white rounded-2xl p-4">
      <div className="grid grid-cols-3 grid-rows-3 gap-3 h-full">

        <div className="transition-transform duration-300 bg-purple-600 hover:scale-105 col-span-2 rounded-xl flex items-center justify-center">1</div>
        <div className="row-span-2 transition-transform duration-300 hover:scale-105 bg-purple-700 rounded-xl flex items-center justify-center">2</div>
        <div className="bg-purple-500 col-span-2 duration-300 hover:scale-105 rounded-xl flex items-center justify-center">3</div>
        <div className="bg-purple-800 rounded-xl duration-300 hover:scale-95 flex items-center justify-center">4</div>
        <div className="transition-transform duration-300 hover:scale-90 bg-purple-900 rounded-xl flex items-center justify-center">5</div>

        <div className="grid grid-cols-2 grid-rows-2 rounded-xl gap-3">
          <div className="bg-purple-700 duration-300 rounded-lg flex items-center hover:scale-105 justify-center">6</div>
          <div className="duration-300 hover:scale-105 bg-purple-700 rounded-lg flex items-center justify-center">7</div>
          <div className="bg-purple-700 rounded-lg flex items-center hover:scale-105 justify-center">8</div>
          <div className="bg-purple-700 duration-300 rounded-lg flex hover:scale-105 items-center justify-center">9</div>
        </div>

      </div>
    </div>
    <CopyCode code={Bento3Code} />
        </div>
  );
};
