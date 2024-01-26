import { Box } from "@mui/material";
import { FC } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import "./ProcessTile.css";
import { Link } from "react-router-dom";

interface IProcessTile {
  id: number;
  procent: number;
  name: string;
}

const ProcessTile: FC<IProcessTile> = ({ id, procent, name }) => {
  // Component logic and JSX goes here

  return (
    <Link
      to={`/dashboard/${id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <Box
        sx={{
          width: "23vw",
          height: "4vh",
          display: "flex",
          alignItems: "center",
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            width: "5vw",
            height: "2vh",
            marginLeft: "5px",
            fontSize: "12px",
            lineHeight: "2vh",
            backgroundColor: "#5bda89",
            textAlign: "center",
            borderRadius: "15px",
          }}
        >
          {procent}%
        </Box>
        <Box
          sx={{
            width: "8vw",
            paddingLeft: "5px",
            color: "white",
            overflow: "hidden",
          }}
        >
          {name}
        </Box>
        <Box
          sx={{
            width: "8vw",
            height: "50%",
            backgroundColor: "#5bda89",
            borderRadius: "12px",
          }}
        ></Box>
      </Box>
    </Link>
  );
};

export default ProcessTile;
