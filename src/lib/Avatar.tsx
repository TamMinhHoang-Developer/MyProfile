import avatarAI from '../assets/images/avatarai.png';
import {
  SiReact,
  SiVuedotjs,
  SiAngular,
  SiNextdotjs,
  SiSvelte,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiNodedotjs,
  SiFigma,
  SiGit,
  SiSass,
  SiWebpack,
} from "react-icons/si"
import React, { useRef, useState } from "react";

export default function AvatarAnimation() {
  // 3D Tilt state
  const avatarRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHover, setIsHover] = useState(false);

  const handleMouseMove = (e) => {
    const rect = avatarRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const maxTilt = 35;
    const rotateY = ((x - centerX) / centerX) * maxTilt;
    const rotateX = -((y - centerY) / centerY) * maxTilt;
    setTilt({ x: rotateX, y: rotateY });
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHover(false);
  };

  // Tính shadow động dựa trên tilt
  const shadowX = -tilt.y * 1.5;
  const shadowY = tilt.x * 1.5;
  const shadow = `${shadowX}px ${shadowY}px 40px 0px rgba(6,182,212,0.5)`;

  return (
    <>
      <div className="relative w-full max-w-[400px] aspect-square mx-auto flex items-center justify-center overflow-hidden z-0">
        {/* Border circles */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          {/* Inner circle with dots - clockwise */}
          <div className="absolute w-[75%] aspect-square border-2 border-primary rounded-full animate-[spin_20s_linear_infinite] z-10">
            {/* Dots for inner circle - 8 evenly spaced icons */}
            <div className="absolute w-7 h-7 md:w-9 md:h-9 rounded-full left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-40 flex items-center justify-center bg-gunmetal transition duration-300 hover:scale-125 hover:bg-primary/80 hover:shadow-lg cursor-pointer pointer-events-auto">
              <SiReact size={21} color="#61DAFB" />
            </div>
            <div className="absolute w-7 h-7 md:w-9 md:h-9 rounded-full left-[85%] top-[15%] -translate-x-1/2 -translate-y-1/2 z-40 flex items-center justify-center bg-gunmetal transition duration-300 hover:scale-125 hover:bg-primary/80 hover:shadow-lg cursor-pointer pointer-events-auto">
              <SiVuedotjs size={21} color="#42B883" />
            </div>
            <div className="absolute w-7 h-7 md:w-9 md:h-9 rounded-full left-full top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 flex items-center justify-center bg-gunmetal transition duration-300 hover:scale-125 hover:bg-primary/80 hover:shadow-lg cursor-pointer pointer-events-auto">
              <SiAngular size={21} color="#DD0031" />
            </div>
            <div className="absolute w-7 h-7 md:w-9 md:h-9 rounded-full left-[85%] top-[85%] -translate-x-1/2 -translate-y-1/2 z-40 flex items-center justify-center bg-gunmetal transition duration-300 hover:scale-125 hover:bg-primary/80 hover:shadow-lg cursor-pointer pointer-events-auto">
              <SiNextdotjs size={21} color="#000000" />
            </div>
            <div className="absolute w-7 h-7 md:w-9 md:h-9 rounded-full left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 z-40 flex items-center justify-center bg-gunmetal transition duration-300 hover:scale-125 hover:bg-primary/80 hover:shadow-lg cursor-pointer pointer-events-auto">
              <SiSvelte size={21} color="#FF3E00" />
            </div>
            <div className="absolute w-7 h-7 md:w-9 md:h-9 rounded-full left-[15%] top-[85%] -translate-x-1/2 -translate-y-1/2 z-40 flex items-center justify-center bg-gunmetal transition duration-300 hover:scale-125 hover:bg-primary/80 hover:shadow-lg cursor-pointer pointer-events-auto">
              <SiTailwindcss size={21} color="#06B6D4" />
            </div>
            <div className="absolute w-7 h-7 md:w-9 md:h-9 rounded-full left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 flex items-center justify-center bg-gunmetal transition duration-300 hover:scale-125 hover:bg-primary/80 hover:shadow-lg cursor-pointer pointer-events-auto">
              <SiHtml5 size={21} color="#E34F26" />
            </div>
            <div className="absolute w-7 h-7 md:w-9 md:h-9 rounded-full left-[15%] top-[15%] -translate-x-1/2 -translate-y-1/2 z-40 flex items-center justify-center bg-gunmetal transition duration-300 hover:scale-125 hover:bg-primary/80 hover:shadow-lg cursor-pointer pointer-events-auto">
              <SiCss3 size={21} color="#1572B6" />
            </div>
          </div>

          {/* Outer circle with dots - counter-clockwise */}
          <div className="absolute w-[95%] aspect-square border-3 border-turquoise rounded-full animate-[spin-reverse_30s_linear_infinite]">
            {/* 8 evenly spaced icons on the outer circle using left/top percentages, all different from inner circle, with official colors */}
            <div className="absolute w-6 h-6 md:w-8 md:h-8 rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex items-center justify-center bg-gunmetal transition duration-300 hover:scale-125 hover:bg-primary/80 hover:shadow-lg cursor-pointer pointer-events-auto"><SiJavascript size={18} color="#F7DF1E" /></div>
            <div className="absolute w-6 h-6 md:w-8 md:h-8 rounded-full top-[15%] left-[85%] -translate-x-1/2 -translate-y-1/2 z-50 flex items-center justify-center bg-gunmetal transition duration-300 hover:scale-125 hover:bg-primary/80 hover:shadow-lg cursor-pointer pointer-events-auto"><SiTypescript size={18} color="#3178C6" /></div>
            <div className="absolute w-6 h-6 md:w-8 md:h-8 rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2 z-50 flex items-center justify-center bg-gunmetal transition duration-300 hover:scale-125 hover:bg-primary/80 hover:shadow-lg cursor-pointer pointer-events-auto"><SiRedux size={18} color="#764ABC" /></div>
            <div className="absolute w-6 h-6 md:w-8 md:h-8 rounded-full top-[85%] left-[85%] -translate-x-1/2 -translate-y-1/2 z-50 flex items-center justify-center bg-gunmetal transition duration-300 hover:scale-125 hover:bg-primary/80 hover:shadow-lg cursor-pointer pointer-events-auto"><SiNodedotjs size={18} color="#339933" /></div>
            <div className="absolute w-6 h-6 md:w-8 md:h-8 rounded-full bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-50 flex items-center justify-center bg-gunmetal transition duration-300 hover:scale-125 hover:bg-primary/80 hover:shadow-lg cursor-pointer pointer-events-auto"><SiFigma size={18} color="#F24E1E" /></div>
            <div className="absolute w-6 h-6 md:w-8 md:h-8 rounded-full top-[85%] left-[15%] -translate-x-1/2 -translate-y-1/2 z-50 flex items-center justify-center bg-gunmetal transition duration-300 hover:scale-125 hover:bg-primary/80 hover:shadow-lg cursor-pointer pointer-events-auto"><SiGit size={18} color="#F05032" /></div>
            <div className="absolute w-6 h-6 md:w-8 md:h-8 rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 z-50 flex items-center justify-center bg-gunmetal transition duration-300 hover:scale-125 hover:bg-primary/80 hover:shadow-lg cursor-pointer pointer-events-auto"><SiSass size={18} color="#CC6699" /></div>
            <div className="absolute w-6 h-6 md:w-8 md:h-8 rounded-full top-[15%] left-[15%] -translate-x-1/2 -translate-y-1/2 z-50 flex items-center justify-center bg-gunmetal transition duration-300 hover:scale-125 hover:bg-primary/80 hover:shadow-lg cursor-pointer pointer-events-auto"><SiWebpack size={18} color="#8DD6F9" /></div>
          </div>
        </div>
        
        {/* Avatar image */}
        <div
          ref={avatarRef}
          className={`relative w-[50%] aspect-square rounded-full z-10 transition-transform duration-300`}
          style={{
            transform: `perspective(600px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${isHover ? 1.08 : 1})`,
            boxShadow: isHover ? shadow : 'none',
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={avatarAI}
            alt="avatar"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </>
  )
}