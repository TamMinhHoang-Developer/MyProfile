import { useEffect, useState } from "react";
import { SiReact, SiPostcss, SiNodedotjs, SiCss3, SiHtml5, SiTypescript, SiPython, SiSass, SiFlask, SiExpress, SiRedux, SiFigma, SiGit, SiWebpack, SiDiscord, SiJavascript } from "react-icons/si";

const stackIconMap = {
  React: <SiReact color="#61DAFB" size={28} />,
  "Node.js": <SiNodedotjs color="#339933" size={28} />,
  CSS: <SiCss3 color="#1572B6" size={28} />,
  HTML: <SiHtml5 color="#E34F26" size={28} />,
  TypeScript: <SiTypescript color="#3178C6" size={28} />,
  Python: <SiPython color="#3776AB" size={28} />,
  Sass: <SiPostcss color="#CC6699" size={28} />,
  SCSS: <SiSass color="#C6538C" size={28} />,
  Flask: <SiFlask color="#000000" size={28} />,
  Express: <SiExpress color="#000000" size={28} />,
  Redux: <SiRedux color="#764ABC" size={28} />,
  Figma: <SiFigma color="#F24E1E" size={28} />,
  Git: <SiGit color="#F05032" size={28} />,
  Webpack: <SiWebpack color="#8DD6F9" size={28} />,
  "Discord.js": <SiDiscord color="#5865F2" size={28} />,
  Javascript: <SiJavascript color="#F7DF1E" size={28} />,
};

export default function CustomCursor({ stack }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (!stack || !stackIconMap[stack]) return null;

  return (
    <div
      style={{
        position: "fixed",
        left: pos.x,
        top: pos.y,
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "50%",
          padding: 8,
          boxShadow: "0 0 24px 6px #45ffca99, 0 0 48px 12px #8b5cf699",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {stackIconMap[stack]}
      </div>
    </div>
  );
} 