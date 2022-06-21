import { OutlinedTextFieldProps, TextField } from "@mui/material";
import { useField } from "formik";

interface Props {
  name: string;
  type: string;
  label?: string;
}

const TextFieldWrap = ({ name, ...props }: Props) => {
  const [field, meta, helpers] = useField(name);

  const MuiConfig: OutlinedTextFieldProps = {
    variant: "outlined",
    fullWidth: true,
  };

  const errorText = meta.touched && meta.error ? meta.error : "";
  const isError = meta.touched && meta.error ? true : false;

  return (
    <TextField
      {...MuiConfig}
      {...field}
      {...props}
      helperText={errorText}
      error={isError}
    />
  );
};

export default TextFieldWrap;
