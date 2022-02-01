import React from "react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Form, Formik } from "formik";
import Box from "@mui/material/Box";
import InputField from "./InputField";

import styles from "./ProjectForm.module.scss";

type ProjectFormProps = {
    setShowForm: (value: boolean) => void;
};

const ProjectForm: React.FC<ProjectFormProps> = ({ setShowForm }) => {
    return (
        <div style={{ width: '100%', border: '2px solid blue' }}>
            <ArrowBackIcon
                className="pointer"
                onClick={() => setShowForm(false)}
            />
            <Box className={styles.outer_form_container}>
                <h3>Create New Project</h3>
                <Formik
                    initialValues={{ title: "shadee" }}
                    onSubmit={async (values) => {
                        console.log("HERE ARE THE VALUES", values);
                    }}
                >
                    <Form className={styles.form_container}>
                        <Box
                            className={styles.input_container}
                            display="flex"
                            flexDirection="column"
                        >
                            <InputField
                                name="title"
                                label="Project Title"
                                placeholder="Project title"
                            />
                        </Box>
                        <button className="btn_primary">Add Project</button>
                    </Form>
                </Formik>
            </Box>
        </div>
    );
};
export default ProjectForm;
