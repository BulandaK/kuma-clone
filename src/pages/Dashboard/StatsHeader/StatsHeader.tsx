import { FC } from "react";
import "./StatsHeader.css";

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
    <div className="stats-header">
      <div>
        <h3>Up</h3>
        <span>{Up}</span>
      </div>
      <div>
        <h3>Down</h3>
        <span>{Down}</span>
      </div>
      <div>
        <h3>Maintenance</h3>
        <span>{Maintenance}</span>
      </div>
      <div>
        <h3>Unknow</h3>
        <span>{Unknow}</span>
      </div>
      <div>
        <h3>Pause</h3>
        <span>{Pause}</span>
      </div>
    </div>
  );
};

export default StatsHeader;
