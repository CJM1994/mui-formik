import { FormHelperText, TextField, TextFieldProps } from "@mui/material";
import { useField } from "formik";

interface Props {
  name: string;
  label: string;
}

const DateTimePicker = ({ name, label, ...props }: Props): JSX.Element => {
  const [field, meta, helpers] = useField(name);

  const MuiConfig: TextFieldProps = {
    fullWidth: true,
    type: "date",
    variant: "outlined",
    name,
    InputLabelProps: {
      shrink: true,
    },
  };

  const errorText = meta.error && meta.touched ? meta.error : "";
  const isError = meta.error && meta.touched ? true : false;

  return (
    <>
      <TextField label={label} {...MuiConfig} {...field} error={isError} />
      <FormHelperText>{errorText}</FormHelperText>
    </>
  );
};

export default DateTimePicker;
