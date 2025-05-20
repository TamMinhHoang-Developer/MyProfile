export type small_projects = {
    id: number;
    stack: string[];
    projectName: string;
    projectDescription: string;
    projectLink: link_small_projects[];
}

export type link_small_projects = {
    socialName: string;
    socialURL: string;
}