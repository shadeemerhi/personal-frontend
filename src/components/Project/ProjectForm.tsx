import React, { useState } from "react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Form, Formik } from "formik";
import Box from "@mui/material/Box";
import InputField from "./InputField";
// import DateInputs from "./DateInputs";

import styles from "./ProjectForm.module.scss";
import DateInputs from "./DateInputs";

type ProjectFormProps = {
    setShowForm: (value: boolean) => void;
};

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

const DEFAULT_PROJECT: Project = {
    title: "",
    description: "",
    photoURL: "",
    startDate: new Date(),
    endDate: new Date(),
    inProgress: false,
    repositoryLinks: [],
    stack: {
        frontend: [],
        backend: [],
        other: [],
    },
};

const ProjectForm: React.FC<ProjectFormProps> = ({ setShowForm }) => {
    const [project, setProject] = useState<Project>(DEFAULT_PROJECT);

    const handleChange = (
        field: string,
        value: string | boolean | Date | null
    ) => {
        setProject((prev) => ({
            ...prev,
            [field]: value,
        }));
    };
    const handleDateChange = () => {};
    const handleStackChange = () => {};

    return (
        <>
            <ArrowBackIcon
                className="pointer"
                onClick={() => setShowForm(false)}
            />
            <Box className={styles.outer_form_container}>
                <h3 className="heavy_text">Create New Project</h3>
                <div className={styles.form_container}>
                    <Box
                        className={styles.input_container}
                        display="flex"
                        flexDirection="column"
                    >
                        <InputField
                            name="title"
                            handleChange={handleChange}
                            label="Project title"
                            placeholder="Title"
                        />
                    </Box>
                    <Box
                        className={styles.input_container}
                        display="flex"
                        flexDirection="column"
                    >
                        <InputField
                            name="description"
                            handleChange={handleChange}
                            label="Project description"
                            placeholder="Description"
                            textarea
                        />
                    </Box>
                    <DateInputs
                        startDate={project.startDate}
                        endDate={project.endDate}
                        inProgress={project.inProgress}
                        handleChange={handleChange}
                    />
                    <Box
                        className={styles.input_container}
                        display="flex"
                        flexDirection="column"
                    ></Box>
                    <button type="submit" className="btn_primary">
                        Add Project
                    </button>
                </div>
            </Box>
        </>
    );
};
export default ProjectForm;
