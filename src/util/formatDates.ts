export const formatStringDate = (input: Date) => {
  const date = new Date(input);
  const month = date.toLocaleString("default", { month: "long" }).slice(0, 3);
  const year = date.getFullYear();
  return `${month}, ${year}`;
};

export const getProjectDateString = (startDate: Date, endDate?: Date) => {
  return `${formatStringDate(startDate)} - ${
    endDate ? formatStringDate(endDate as Date) : "In Progress"
  }`;
};
