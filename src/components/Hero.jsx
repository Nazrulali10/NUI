

export const Hero = () => {
  return (
    <div className="flex md:flex-row flex-col justify-between bg-gradient-to-br from-purple-900 via-purple-600 to-purple-200 w-full h-68 md:h-72 p-8 md:p-20 rounded-2xl mt-2 md:mt-6 ">
      <div className=" flex flex-col gap-2">
        <h1 className="text-3xl md:text-4xl text-white font-bold">
          Welcome to{" "}
          <span className="animate-pulse bg-gradient-to-r from-purple-400  to-violet-400 text-transparent bg-clip-text font-bold">
            NUI
          </span>
        </h1>
        <p className="text-md text-white">
          Where you can find modern UI components for your website.
        </p>
      </div>
      <div className="flex flex-col items-center gap-2 justify-end px-6">
        <h1 className="text-xl md:text-3xl text-white font-bold">Dependencies</h1>

        <p className="font-semibolds text-white">
          TailwindCss <span className="text-black p-2">|</span> Lucide-react
        </p>
      </div>
    </div>
  );
};
