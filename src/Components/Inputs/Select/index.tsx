import * as React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useController, FieldValues, Control } from "react-hook-form";

type AutocompleteOption = {
  nome: string;
  codigo: string;
};

type AutocompleteProps = {
  name: string;
  label: string;
  control: Control<FieldValues>;
  options: AutocompleteOption[];
  error?: boolean;
  required?: boolean;
  dependentAutocomplete?: any | null;
  setSelectedOption?: any;
  defaultValue?: any;
};

const AutocompleteField: React.FC<AutocompleteProps> = (
  {
    name,
    label,
    control,
    options,
    error,
    required,
    dependentAutocomplete,
    setSelectedOption,
    defaultValue,
  },
  ref
) => {
  const {
    field: { onChange, onBlur },
  } = useController({
    name,
    control,
    defaultValue,
  });

  const [selectedOption, localSetSelectedOption] =
    React.useState<AutocompleteOption | null>(null);

  React.useEffect(() => {
    localSetSelectedOption(defaultValue || null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValue]);

  const handleChange = (
    event: React.ChangeEvent<{}>,
    newValue: AutocompleteOption | null
  ) => {
    localSetSelectedOption(newValue);
    onChange(newValue?.codigo || "");

    if (dependentAutocomplete && newValue === null) {
      setSelectedOption();
    }

    setSelectedOption(newValue);
  };

  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option.nome}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant="outlined"
          error={error}
          required={required}
        />
      )}
      value={selectedOption}
      onChange={handleChange}
    />
  );
};

export default AutocompleteField;
