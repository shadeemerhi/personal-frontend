import { useField } from "formik";
import React from "react";

type InputFieldProps = React.InputHTMLAttributes<
    HTMLInputElement | HTMLTextAreaElement
> & {
    name: string;
    label?: string;
    textarea?: string;
};

const InputField: React.FC<InputFieldProps> = ({
    label,
    textarea,
    size: _,
    ...props
}) => {
    const [field, { error }] = useField(props);
    return (
        <>
            <label>{label}</label>
            {textarea ? (
                <textarea />
            ) : (
                <input
                    {...field}
                    {...props}
                    id={field.name}
                    placeholder={props.placeholder}
                />
            )}
        </>
    );
};
export default InputField;
