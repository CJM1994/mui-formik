import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from "@mui/material";
import { useField, useFormikContext } from "formik";
import React from "react";

interface Props {
  name: string;
  label: string;
  legend: string;
}

const CheckboxWrapper = ({
  name,
  label,
  legend,
  ...props
}: Props): JSX.Element => {
  const [field, meta, helpers] = useField(name);
  const { setFieldValue } = useFormikContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setFieldValue(name, checked);
  };

  const checkboxProps = {
    ...field,
    onChange: handleChange,
  };

  const errorText = meta.error && meta.touched ? meta.error : "";
  const isError = meta.error && meta.touched ? true : undefined;

  return (
    <FormControl error={isError}>
      <FormLabel component={"legend"}>{legend}</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox {...checkboxProps} />}
          label={label}
        ></FormControlLabel>
        <FormHelperText error={isError}>{errorText}</FormHelperText>
      </FormGroup>
    </FormControl>
  );
};

export default CheckboxWrapper;
