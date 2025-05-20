import { projects } from '@/types';
import { useState, useEffect } from 'react';

const mockProjects: projects[] = [
    {
        id: 1,
        name: "ChertNodes",
        description: "Minecraft servers hosting",
        stack: ["HTML", "SCSS", "Python", "Flask"],
        image: "https://i.pinimg.com/736x/30/5b/d8/305bd8d1b6be5090db9bb98723a65c34.jpg",
        liveUrl: null,
        cachedUrl: "#",
        urlProject: [
            {
                urlName: "Github",
                urlValue: "https://github.com/yourusername/chertnodes"
            }
        ]
    },
    {
        id: 2,
        name: "ProtectX",
        description: "Discord anti-crash bot",
        stack: ["React", "Express", "Discord.js", "Node.js", "HTML", "SCSS", "Python", "Flask"],
        image: null,
        liveUrl: "#",
        cachedUrl: null,
        urlProject: [
            {
                urlName: "Live Demo",
                urlValue: "#"
            }
        ]
    },
    {
        id: 3,
        name: "Kart Answers Viewer",
        description: "Get answers to your kart quiz",
        stack: ["CSS", "Express", "Node.js"],
        image: null,
        liveUrl: "#",
        cachedUrl: null,
        urlProject: [
            {
                urlName: "Live Demo",
                urlValue: "#"
            }
        ]
    }
];

export function useProjectData() {
    const [projectData, setProjectData] = useState<projects[]>([]);

    useEffect(() => {
        setProjectData(mockProjects);
    }, []);

    return projectData;
}

