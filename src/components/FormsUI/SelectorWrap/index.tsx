import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  SelectProps,
} from "@mui/material";
import { useField, useFormikContext } from "formik";

interface Props {
  name: string;
  label: string;
}

const SelectorWrap = ({ name, label, ...props }: Props): JSX.Element => {
  const [field, meta, helpers] = useField(name);
  const { setFieldValue } = useFormikContext();

  const handleChange = (event: SelectChangeEvent) => {
    setFieldValue(name, event.target.value);
  };

  const MuiConfig: SelectProps = {
    label: label,
    variant: "outlined",
  };

  const errorText = meta.touched && meta.error ? meta.error : "";
  const isError = meta.touched && meta.error ? true : false;

  return (
    <FormControl fullWidth>
      <InputLabel error={isError}>{label}</InputLabel>
      <Select
        {...MuiConfig}
        {...field}
        {...props}
        onChange={(event) => handleChange(event)}
        error={isError}
      >
        <MenuItem value={"Canada"}>Canada</MenuItem>
        <MenuItem value={"United States"}>United States</MenuItem>
      </Select>
      <FormHelperText error={isError}>{errorText}</FormHelperText>
    </FormControl>
  );
};

export default SelectorWrap;
