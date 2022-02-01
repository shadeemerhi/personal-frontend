import React, { useState } from "react";
import ProjectForm from "../components/Project/ProjectForm";

interface ProjectPageProps {}

const Projects: React.FC<ProjectPageProps> = () => {
    const [showForm, setShowForm] = useState(false);
    return (
        <>
            {showForm ? (
                <ProjectForm setShowForm={setShowForm} />
            ) : (
                <>
                    <p>IMAGE HEADER WILL BE HERE</p>
                    <p>Projects Page</p>
                    <button
                        className="btn_primary"
                        onClick={() => setShowForm(true)}
                    >
                        Create Project
                    </button>
                </>
            )}
        </>
    );
};
export default Projects;
