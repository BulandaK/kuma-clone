import { FC } from "react";
import { Box, Chip, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import "./SelectProcess.css";
import SelectButton from "../../common/SelectButton";

interface ISelectApp {
  // Props definition goes here
}

const SelectProcess: FC<ISelectApp> = () => {
  const handleClick = () => {};

  return (
    <div className="select-app-container">
      {/* <Box sx={{ backgroundColor: "#161b22", height: "10vh" }}>
        </Box> */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "5vh",
        }}
      >
        <Chip
          label="Select"
          variant="outlined"
          sx={{
            color: "white",
            backgroundColor: "black",
            borderColor: "black",
          }}
          onClick={handleClick}
        />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <SearchIcon sx={{ color: "white" }} />

          <input className="select-input" placeholder="Search..." />
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", height: "5vh" }}>
        <Button>
          <MenuIcon
            sx={{
              color: "gray",
              border: "1px solid black",
              width: "20px",
              height: "20px",
              padding: "5px",
              borderRadius: "50%",
            }}
          />
        </Button>
        <SelectButton text="Status" />
        <SelectButton text="Active Status" />
        <SelectButton text="Tags" />
      </Box>
    </div>
  );
};

export default SelectProcess;
