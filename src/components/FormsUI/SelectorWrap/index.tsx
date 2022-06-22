import {
  MenuItem,
  Select,
  SelectChangeEvent,
  SelectProps,
} from "@mui/material";
import { useField, useFormikContext } from "formik";

interface Props {
  name: string;
}

const SelectorWrap = ({ name, ...props }: Props): JSX.Element => {
  const [field, meta, helpers] = useField(name);
  const { setFieldValue } = useFormikContext();

  const handleChange = (event: SelectChangeEvent) => {
    setFieldValue(name, event.target.value);
  };

  const MuiConfig: SelectProps = {
    fullWidth: true,
    variant: "outlined",
  };

  return (
    <Select
      {...MuiConfig}
      {...field}
      {...props}
      onChange={(event) => handleChange(event)}
    >
      <MenuItem value={"Canada"}>Canada</MenuItem>
      <MenuItem value={"United States"}>United States</MenuItem>
    </Select>
  );
};

export default SelectorWrap;
