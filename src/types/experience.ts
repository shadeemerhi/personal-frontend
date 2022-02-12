export type WorkItem = {
  __typename?: string;
  _id?: string;
  companyName: string;
  title: string;
  startDate: Date;
  endDate?: Date;
  inProgress: boolean;
  description: string[];
};
