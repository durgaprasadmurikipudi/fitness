import { useContext } from "react";
import { formatDateToHumanReadable, mapOverRange } from "../../utils";
import { DashboardTable } from "./dashboard-table";
import { DashboardContext } from "../../context/dashboard-page/dashboard-page-context";

export const DashboardTableViewMode = () => {
  const {
    startWeekNo,
    endWeekNo,
    selectedWeek,
    weekStartDate,
    weekEndDate,
    dashboardScreenData,
    handleSelectedWeek,
  } = useContext(DashboardContext);

  return (
    <>
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
    </>
  );
};
