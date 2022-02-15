export type Stack = {
  frontend: string[];
  backend: string[];
  other: string[];
};

export type StackInputItem = {
  name: string;
  category: "frontend" | "backend" | "other";
};

export type Project = {
  __typename?: string;
  _id?: string;
  title: string;
  description: string;
  photoURL?: string;
  photoFile?: File;
  startDate: Date;
  endDate?: Date;
  inProgress: boolean;
  repositoryLinks: string[];
  stack: Stack;
};

export type User = {
  __typename?: string;
  _id?: string;
  title: string;
  photoURL?: string;
  photoFile?: File;
  githubLink: string;
  linkedInLink: string;
  email: string;
  preBio: string;
  bio: string;
};
