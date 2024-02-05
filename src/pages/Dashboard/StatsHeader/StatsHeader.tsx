import { FC } from "react";
import "./StatsHeader.css";
import { Box, Typography } from "@mui/material";

interface StatsHeaderProps {
  Up: number;
  Down: number;
  Maintenance: number;
  Unknow: number;
  Pause: number;
}

const StatsHeader: FC<StatsHeaderProps> = ({
  Up,
  Down,
  Maintenance,
  Unknow,
  Pause,
}) => {
  return (
    <Box className="stats-header" sx={{ backgroundColor: "primary.main" }}>
      <Box>
        <Typography variant="h3">Up</Typography>
        <Typography variant="subtitle1">{Up}</Typography>
      </Box>
      <Box>
        <Typography variant="h3">Down</Typography>
        <Typography variant="subtitle1">{Down}</Typography>
      </Box>
      <Box>
        <Typography variant="h3">Maintenance</Typography>
        <Typography variant="subtitle1">{Maintenance}</Typography>
      </Box>
      <Box>
        <Typography variant="h3">Unknow</Typography>
        <Typography variant="subtitle1">{Unknow}</Typography>
      </Box>
      <Box>
        <Typography variant="h3">Pause</Typography>
        <Typography variant="subtitle1">{Pause}</Typography>
      </Box>
    </Box>
  );
};

export default StatsHeader;
