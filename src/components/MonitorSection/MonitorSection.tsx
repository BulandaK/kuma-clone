import { FC } from "react";
import "./MonitorSection.css";
import AddNewMonitorButton from "./AddNewMonitorButton/AddNewMonitorButton";
import SelectProcess from "./SelectProcess/SelectProcess";
import ProcessTile from "./ProcessTile/ProcessTile";

interface MonitorSectionProps {}

const dummyData = [
  { procent: 100, name: "Partner Hub Dev" },
  { procent: 99, name: "Partner Hub Dev" },
  { procent: 87, name: "Partner Hub Dev" },
  { procent: 100, name: "Partner My hub" },
  { procent: 100, name: "lion hub" },
  { procent: 100, name: "abb hub" },
];

const MonitorSection: FC<MonitorSectionProps> = () => {
  return (
    <div className="monitor-section-container">
      <AddNewMonitorButton />
      <SelectProcess />
      <div className="process-container">
        {dummyData.map((proces, index) => {
          return (
            <ProcessTile
              id={index}
              procent={proces.procent}
              name={proces.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MonitorSection;
