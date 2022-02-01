import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

type ProjectFormProps = {
    setShowForm: (value: boolean) => void;
};

const ProjectForm: React.FC<ProjectFormProps> = ({ setShowForm }) => {
    return (
        <ArrowBackIcon className="pointer" onClick={() => setShowForm(false)} />
    );
};
export default ProjectForm;
