import { Button, ButtonProps } from "@mui/material";
import { useFormikContext } from "formik";

interface Props {
  children: React.ReactNode;
}

const ButtonWrapper = ({ children, ...props }: Props) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  };

  const buttonConfig: ButtonProps = {
    color: "primary",
    variant: "contained",
    fullWidth: true,
    onClick: handleSubmit,
  };

  return <Button {...buttonConfig}>{children}</Button>;
};

export default ButtonWrapper;
