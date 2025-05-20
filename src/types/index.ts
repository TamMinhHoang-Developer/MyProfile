export type projects = {
    id: number;
    name: string;
    description: string;
    image: string | null;
    stack: string[];
    liveUrl?: string | null;
    cachedUrl?: string | null;
    urlProject?: urlData[] | null;
}

export type skills = {
    categoryName: string;
    listStackOfCategory: string[];
}

export type urlData = {
    urlName: string;
    urlValue: string;
}