import React from "react";
import { EducationItem } from "../../../../generated/graphql";

type EducationItemProps = {
  educationItem: EducationItem;
  authKey: string;
};

const EducationItem: React.FC<EducationItemProps> = ({
  educationItem,
  authKey,
}) => {
  return <div>{educationItem.schoolName}</div>;
};
export default EducationItem;
