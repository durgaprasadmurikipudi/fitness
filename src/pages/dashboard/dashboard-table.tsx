import { getWinnerStepsCount } from "../../services/dashboard";
import type { IDashboardTableProps } from "../../types";
import { getDefaultNickNames } from "../../utils/app-utils";
import {
  AverageStepsRow,
  HighestStepsRow,
  StepsRows,
  TotalStepsRow,
} from "./dashboard-table-util-components";
import "./dashboard-table.css";

export const DashboardTable = (props: IDashboardTableProps) => {
  const { weekStartDate, dashboardScreenData } = props;
  const winnerStepsCount = getWinnerStepsCount(dashboardScreenData);
  const highestStepsForThatWeek = dashboardScreenData.highestStepsInTheWeek;

  return (
    <div id="participants-table">
      <table>
        <thead>
          <tr>
            <th></th>
            {getDefaultNickNames().map((name) => (
              <th key={name}>{name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <StepsRows
            dashboardScreenData={dashboardScreenData}
            weekStartDate={weekStartDate}
          />
          <tr>
            <td>
              <b>Total Steps</b>
            </td>
            <TotalStepsRow
              dashboardScreenData={dashboardScreenData}
              winnerStepsCount={winnerStepsCount}
            />
          </tr>
          <tr>
            <td>
              <b>Average Steps</b>
            </td>
            <AverageStepsRow dashboardScreenData={dashboardScreenData} />
          </tr>
          <tr>
            <td>
              <b>Highest steps in a day</b>
            </td>
            <HighestStepsRow
              dashboardScreenData={dashboardScreenData}
              highestStepsForThatWeek={highestStepsForThatWeek}
            />
          </tr>
        </tbody>
      </table>
    </div>
  );
};
