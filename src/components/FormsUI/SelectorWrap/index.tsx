import { MenuItem, Select } from "@mui/material";
import { useField } from "formik";

const SelectorWrap = (name: string) => {
  const [field, meta, helpers] = useField(name);

  return (
    <Select>
      <MenuItem>Canada</MenuItem>
    </Select>
  );
};

export default SelectorWrap;
