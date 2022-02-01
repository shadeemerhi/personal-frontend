import { useField } from "formik";
import React from "react";

type InputFieldProps = React.InputHTMLAttributes<
    HTMLInputElement | HTMLTextAreaElement
> & {
    name: string;
    handleChange: (field: string, value: string) => void;
    placeholder: string;
    label?: string;
    textarea?: boolean;
};

const InputField: React.FC<InputFieldProps> = ({
    name,
    handleChange,
    label,
    textarea,
    placeholder,
}) => {
    return (
        <>
            <label style={{ marginBottom: "4px" }}>{label}</label>
            {textarea ? (
                <textarea
                    placeholder={placeholder}
                    onChange={(event) => handleChange(name, event.target.value)}
                />
            ) : (
                <input
                    name={name}
                    placeholder={placeholder}
                    onChange={(event) => handleChange(name, event.target.value)}
                />
            )}
        </>
    );
};
export default InputField;