import { FC } from "react";
import "./Dashboard.css";
import StatsHeader from "./StatsHeader/StatsHeader";

const Dashboard: FC<{}> = () => {
  return (
    <div className="dashboard-container">
      <h1>Quick Stats</h1>
      <StatsHeader Up={43} Down={5} Maintenance={0} Unknow={0} Pause={2} />
    </div>
  );
};

export default Dashboard;
