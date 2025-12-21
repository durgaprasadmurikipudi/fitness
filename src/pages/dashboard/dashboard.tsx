import { useCallback, useState, type ChangeEvent } from "react";
import { PARTICIPANTTS_DATA } from "../../constants";
import {
  getParticipantsDataForWeek,
  getValidWeekRange,
} from "../../services/dashboard";
import "./dashboard.css";
import {
  formatDateToHumanReadable,
  getEndDateForWeekNo,
  getStartDateForWeekNo,
  mapOverRange,
} from "../../utils/common-utils";
import { DashboardTable } from "./dashboard-table";

const [startWeekNo, endWeekNo] = getValidWeekRange(PARTICIPANTTS_DATA);

export const Dashboard = () => {
  const [selectedWeek, setSelectedWeek] = useState(startWeekNo);
  const weekStartDate = getStartDateForWeekNo(selectedWeek);
  const weekEndDate = getEndDateForWeekNo(selectedWeek);

  const dashboardScreenData = getParticipantsDataForWeek(
    PARTICIPANTTS_DATA,
    selectedWeek
  );

  const handleSelectedWeek = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setSelectedWeek(Number(e.target.value));
    },
    []
  );

  return (
    <div id="dashboard">
      <div id="dashboard-controls">
        <label htmlFor="weeks">
          <b>Select Week:</b>{" "}
        </label>
        <select id="weeks-selection" onChange={handleSelectedWeek}>
          {mapOverRange(startWeekNo, endWeekNo, (optionVal) => (
            <option
              key={optionVal}
              value={optionVal}
              selected={selectedWeek === optionVal}
            >
              Week - {optionVal}
            </option>
          ))}
        </select>
      </div>
      <div id="dashboard-table-container">
        <span>
          <b> {formatDateToHumanReadable(weekStartDate)}</b> to{" "}
          <b>{formatDateToHumanReadable(weekEndDate)}</b>
        </span>
        <DashboardTable
          dashboardScreenData={dashboardScreenData}
          weekStartDate={weekStartDate}
        />
      </div>
    </div>
  );
};
