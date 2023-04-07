import Button from "@mui/material/Button";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  disabled?: boolean | undefined;
  fullWidth?: boolean;
  size?: "small" | "medium" | "large";
};

const ComponentButton = ({
  label,
  onClick,
  type = "button",
  color = "primary",
  disabled,
  fullWidth,
  size = "medium",
}: ButtonProps) => {
  return (
    <Button
      variant="contained"
      type={type}
      color={color}
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
      size={size}
    >
      {label}
    </Button>
  );
};

export default ComponentButton;
