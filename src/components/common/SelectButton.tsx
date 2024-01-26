import { Button } from "@mui/material";
import { FC } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface Props {
  text: string;
}

const SelectButton: FC<Props> = ({ text }) => {
  // Component logic and JSX goes here

  return (
    <div>
      <Button
        className="select-button"
        sx={{
          color: "gray",
          border: "1px solid black",
          borderRadius: "15px",
          padding: "4px",
          textTransform: "unset",
        }}
      >
        {text}
        <ExpandMoreIcon />
      </Button>
    </div>
  );
};

export default SelectButton;
