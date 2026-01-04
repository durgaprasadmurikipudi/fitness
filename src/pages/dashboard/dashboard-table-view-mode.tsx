import { formatDateToHumanReadable } from "../../utils";
import { DashboardTable } from "./dashboard-table";
import { useDashboardPageContext } from "../../context/dashboard-page/dashboard-page-context";

export const DashboardTableViewMode = () => {
  const { weekStartDate, weekEndDate, dashboardScreenData } =
    useDashboardPageContext();

  return (
    <>
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
