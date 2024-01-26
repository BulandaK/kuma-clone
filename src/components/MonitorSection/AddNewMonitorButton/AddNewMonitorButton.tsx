import { FC } from "react";

import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

interface IAddNewMonitorButton {}

const AddNewMonitorButton: FC<IAddNewMonitorButton> = ({}) => {
  return (
    <Link to="/add" style={{ textDecoration: "none", color: "black" }}>
      <Box
        sx={{
          backgroundColor: "#7ce7a3",
          width: "10vw",
          display: "flex",
          padding: "10px",
          borderRadius: "30px",
        }}
      >
        <AddIcon /> Add New Monitor
      </Box>
    </Link>
  );
};

export default AddNewMonitorButton;
