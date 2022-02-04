import { Project } from "../types/project";

export const validateProject = (project: Project) => {
  const {
    title,
    description,
    startDate,
    endDate,
    inProgress,
    repositoryLinks,
    stack: { frontend, backend, other },
  } = project;

  return (
    !!title &&
    !!description &&
    !!startDate &&
    (inProgress || endDate) &&
    !!repositoryLinks.length &&
    !!frontend.length &&
    !!backend.length
  );
};
