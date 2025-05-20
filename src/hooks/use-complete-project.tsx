import { projects } from "@/types";
import { useState, useEffect } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mockCompleteProjects: projects[] = [
  {
    id: 1,
    name: "ChertNodes",
    description: "Minecraft servers hosting",
    stack: ["HTML", "SCSS", "Python", "Flask"],
    image: "https://i.pinimg.com/736x/30/5b/d8/305bd8d1b6be5090db9bb98723a65c34.jpg",
    liveUrl: "https://chertnodes.com",
    cachedUrl: "#",
    urlProject: [
      {
        urlName: "Github",
        urlValue: "https://github.com/yourusername/chertnodes"
      },
      {
        urlName: "Live",
        urlValue: "https://chertnodes.com"
      }
    ]
  },
  {
    id: 2,
    name: "Kahoot Answers Viewer",
    description: "Get answers to your kahoot quiz",
    stack: ["CSS", "Express", "Node.js"],
    image: null,
    liveUrl: "https://kahoot-answers.com",
    cachedUrl: null,
    urlProject: [
      {
        urlName: "Live",
        urlValue: "https://kahoot-answers.com"
      }
    ]
  },
  {
    id: 3,
    name: "ProtectX",
    description: "Discord anti-crash bot",
    stack: ["React", "Express", "Discord.js", "Node.js"],
    image: null,
    liveUrl: null,
    cachedUrl: "#",
    urlProject: [
      {
        urlName: "Github",
        urlValue: "https://github.com/yourusername/protectx"
      }
    ]
  },
  {
    id: 4,
    name: "Kotik Bot",
    description: "Multi-functional discord bot",
    stack: ["HTML", "CSS", "JS"],
    image: null,
    liveUrl: "https://kotikbot.xyz",
    cachedUrl: null,
    urlProject: [
      {
        urlName: "Live",
        urlValue: "https://kotikbot.xyz"
      }
    ]
  },
  {
    id: 5,
    name: "Portfolio",
    description: "You're using it rn",
    stack: ["Vue", "TS", "Less"],
    image: null,
    liveUrl: "https://github.com/yourusername/portfolio",
    cachedUrl: null,
    urlProject: [
      {
        urlName: "Github",
        urlValue: "https://github.com/yourusername/portfolio"
      }
    ]
  }
];

export function useCompleteProjectData() {
  const [completeProjectData, setCompleteProjectData] = useState<projects[]>(
    []
  );

  useEffect(() => {
    setCompleteProjectData([]);
  }, []);

  return completeProjectData;
}
