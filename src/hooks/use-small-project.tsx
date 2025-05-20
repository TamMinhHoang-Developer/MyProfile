import { small_projects } from "@/types/work";
import { useEffect, useState } from "react";

const mockProjects: small_projects[] = [
  {
    id: 1,
    projectName: "Bot boilerplate",
    projectDescription:
      "Start creating scalable discord.js bot with typescript in seconds",
    stack: ["Discord.js", "TS", "JS"],
    projectLink: [
      {
        socialName: "Github",
        socialURL: "https://github.com/yourusername/bot-boilerplate",
      },
    ],
  },
  {
    id: 2,
    projectName: "My blog",
    projectDescription: "Front-end of my future blog website written in vue",
    stack: ["Vue", "CSS", "JS"],
    projectLink: [
      {
        socialName: "Github",
        socialURL: "https://github.com/yourusername/my-blog",
      },
    ],
  },
  {
    id: 3,
    projectName: "Chess pro",
    projectDescription:
      "Figma landing page about service for viewing chess tournaments",
    stack: ["Figma"],
    projectLink: [
      {
        socialName: "Figma",
        socialURL: "https://figma.com/file/yourusername/chess-pro",
      },
    ],
  },
  {
    id: 4,
    projectName: "Crash protect website",
    projectDescription:
      "Figma template for website about anti-raid, anti-crash discord bot",
    stack: ["Figma"],
    projectLink: [
      {
        socialName: "Figma",
        socialURL: "https://figma.com/file/yourusername/crash-protect",
      },
    ],
  },
  {
    id: 5,
    projectName: "CSS expirements",
    projectDescription: "Collection of my different little projects in css",
    stack: ["HTML", "CSS"],
    projectLink: [
      {
        socialName: "Live",
        socialURL: "https://yourusername.github.io/css-experiments",
      },
    ],
  },
  {
    id: 6,
    projectName: "Web Dev nvim config",
    projectDescription: "Config for neovim perfect for web developer",
    stack: ["Lua", "NeoVim"],
    projectLink: [
      {
        socialName: "Github",
        socialURL: "https://github.com/yourusername/web-dev-nvim-config",
      },
    ],
  },
  {
    id: 7,
    projectName: "Ooku",
    projectDescription: "Simple link shortener with auth",
    stack: ["Python", "Quart", "HTML"],
    projectLink: [
      {
        socialName: "Live",
        socialURL: "https://ooku.yourdomain.com",
      },
    ],
  },
  {
    id: 8,
    projectName: "School website",
    projectDescription: "Figma template website for my school",
    stack: ["Figma"],
    projectLink: [
      {
        socialName: "Figma",
        socialURL: "https://figma.com/file/yourusername/school-website",
      },
    ],
  },
];

export function useSmallProjectData() {
  const [smallProjectData, setSmallProjectData] = useState<small_projects[]>([]);

  useEffect(() => {
    setSmallProjectData(mockProjects);
  }, []);

  return smallProjectData;
}
