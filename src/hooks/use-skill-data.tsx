import { skills } from "@/types";
import { useEffect, useState } from "react";

const mockSkills = [
    {
        categoryName: 'Languages',
        listStackOfCategory: ['TypeScript', 'Lua', 'Python', 'JavaScript']
    },
    {
        categoryName: 'Databases',
        listStackOfCategory: ['SQLite', 'PostgreSQL', 'Mongo']
    },
    {
        categoryName: 'Tools',
        listStackOfCategory: ['VSCode', 'Neovim', 'Linux', 'Figma', 'XFCE', 'Arch', 'Git', 'Font Awesome']
    },
    {
        categoryName: 'Other',
        listStackOfCategory: ['HTML', 'CSS', 'EJS', 'SCSS', 'REST', 'Jinja']
    },
    {
        categoryName: 'Frameworks',
        listStackOfCategory: ['React', 'Vue', 'Disnake', 'Discord.js', 'Flask', 'Express.js']
    }
];

export function useSkillData() {
    const [skillData, setSkillData] = useState<skills[]>([]);

    useEffect(() => {
        setSkillData(mockSkills);
    }, []);

    return skillData;
}

