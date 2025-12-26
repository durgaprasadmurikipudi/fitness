import {
  getHighestWeeklyAwardWinner,
  getWeekByWeekAwardWinner,
} from "../../utils/app-utils";

import "./leadership-dashboard.css";

export const LeadershipDashboard = () => {
  const leadershipDashboardData = getWeekByWeekAwardWinner();
  const highestWeeklyAwardWinnerText = getHighestWeeklyAwardWinner(
    leadershipDashboardData
  );

  return (
    <div id="leadership-dashboard-container">
      <div>
        <table>
          <thead>
            <tr>
              <th>Week No</th>
              <th>Participant Name</th>
              <th>Winning Steps</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(leadershipDashboardData).map((weekNo) => {
              return (
                <tr>
                  <td>{weekNo}</td>
                  <td>{leadershipDashboardData[weekNo].name}</td>
                  <td>{leadershipDashboardData[weekNo].steps || ""}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        <h4>{highestWeeklyAwardWinnerText}</h4>
      </div>
    </div>
  );
};
