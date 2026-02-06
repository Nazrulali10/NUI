import { BriefcaseBusiness, Github, Linkedin } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [active,setActive] = useState(null)
  const footerLinks = [
    {
      label: "Github",
      icon: <Github size={20} />,
      href: "https://github.com/YOUR_GITHUB",
    },
    {
      label: "LinkedIn",
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com/in/YOUR_LINKEDIN",
    },
    {
      label: "Portfolio",
      icon: <BriefcaseBusiness size={20} />,
      href: "https://YOUR_PORTFOLIO.com",
    },
  ];

  return (
    <div className="bg-purple-200 p-2">
      <div className="px-2 md:px-24 pt-6">
        <h1 className="animate-pulse bg-gradient-to-r text-4xl from-purple-600 to-violet-300 text-transparent bg-clip-text font-bold">
          NUI
        </h1>
      </div>
      <div className="text-gray-500 px-2 md:mt-0 mt-5 md:pb-5  md:px-32 flex justify-center  pb-8">
        <p>Browse modern UI components, click Copy, and drop them straight into your project.</p>
      </div>

      
      <div   className="flex gap-4 justify-center items-center">
        {footerLinks.map((item, i) => (
          <div key={i} onMouseEnter={()=>setActive(i)}
            onMouseLeave={()=>setActive(null)} className=" relative flex flex-col items-center">{active===i && <span className="absolute -top-7 text-purple-600 p-1 rounded-full bg-purple-100 text-xs">{item.label}</span>}
            
          <a
           
            target="_blank"
            href={item.href}
            className="bg-purple-50 mt-1 text-purple-600 rounded-full w-10 h-10 flex justify-center items-center hover:bg-purple-100 transition"
          >
            {item.icon}
          </a>
          </div>
        ))}
      </div>

      <p className="text-gray-500 text-sm text-center mt-3">
        © 2026 NUI. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
