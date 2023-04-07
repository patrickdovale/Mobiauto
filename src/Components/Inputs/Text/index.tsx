import React from "react";
import { TextField } from "@material-ui/core";
import { useController, Control, FieldValues } from "react-hook-form";

type InputProps = {
  control: Control<FieldValues>;
  name: string;
  label: string;
  defaultValue?: string;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
};

const Input = ({
  control,
  name,
  label,
  defaultValue = "",
  required,
  multiline,
  rows,
}: InputProps) => {
  const {
    field: { ref, ...inputProps },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    defaultValue,
  });

  return (
    <TextField
      label={label}
      inputRef={ref}
      error={invalid}
      helperText={error?.message}
      required={required}
      multiline={multiline}
      rows={rows}
      fullWidth
      {...inputProps}
    />
  );
};

export default Input;
