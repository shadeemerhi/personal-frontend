import { useField } from "formik";
import React from "react";

type InputFieldProps = React.InputHTMLAttributes<
    HTMLInputElement | HTMLTextAreaElement
> & {
    name: string;
    label?: string;
    textarea?: boolean;
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
            <label style={{ marginBottom: '4px' }}>{label}</label>
            {textarea ? (
                <textarea placeholder={props.placeholder} />
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
