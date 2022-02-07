import { Box } from "@mui/material";
import { useField } from "formik";
import React from "react";

type InputFieldProps = React.InputHTMLAttributes<
  HTMLInputElement | HTMLTextAreaElement
> & {
  name: string;
  // handleChange: (field: string, value: string) => void;
  handleChange: any;
  placeholder: string;
  label?: string;
  textarea?: boolean;
  value?: string;
};

const InputField: React.FC<InputFieldProps> = ({
  name,
  handleChange,
  label,
  textarea,
  placeholder,
  value,
}) => {
  return (
    <>
      <label className="medium_text">{label}</label>
      {textarea ? (
        <textarea
          placeholder={placeholder}
          onChange={(event) => handleChange(name, event.target.value)}
          value={value}
        />
      ) : (
        <input
          name={name}
          placeholder={placeholder}
          onChange={(event) => handleChange(name, event.target.value)}
          value={value}
        />
      )}
    </>
  );
};
export default InputField;
