export type Stack = {
    frontend: string[];
    backend: string[];
    other: string[];
};

export type Project = {
    title: string;
    description: string;
    photoURL?: string;
    startDate: Date;
    endDate: Date | null;
    inProgress: boolean;
    repositoryLinks: string[];
    stack: Stack;
};
