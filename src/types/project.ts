export type Stack = {
    frontend: string[];
    backend: string[];
    other: string[];
};

export type StackInputItem = {
    name: string;
    category: 'frontend' | 'backend' | 'other'
}

export type Project = {
    _id?: string;
    title: string;
    description: string;
    photoURL?: string;
    startDate: Date;
    endDate: Date | null;
    inProgress: boolean;
    repositoryLinks: string[];
    stack: Stack;
};
