import { useCallback, useState, type ChangeEvent } from "react";
import { PARTICIPANT_NICK_NAMES, PARTICIPANTTS_DATA } from "../../constants";
import {
  getHighestSteps,
  getParticipantsDataForWeek,
  getValidWeekRange,
} from "../../services/dashboard";
import "./dashboard.css";
import {
  formatToDateString,
  getEndDateForWeekNo,
  getStartDateForWeekNo,
  mapOverRange,
} from "../../utils";

const [startWeekNo, endWeekNo] = getValidWeekRange(PARTICIPANTTS_DATA);

export const Dashboard = () => {
  const [selectedWeek, setSelectedWeek] = useState(startWeekNo);
  const weekStartDate = getStartDateForWeekNo(selectedWeek);
  const weekEndDate = getEndDateForWeekNo(selectedWeek);

  const dashboardScreenData = getParticipantsDataForWeek(
    PARTICIPANTTS_DATA,
    selectedWeek
  );

  const highestStepsCount = getHighestSteps(dashboardScreenData);

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
      <div id="dashboard-data">
        <h3>Week No - {dashboardScreenData.weekNo}: </h3>
        <span>
          Starts from: <b> {weekStartDate.toDateString()}</b> - Ends on :{" "}
          <b>{weekEndDate.toDateString()}</b>
        </span>
        <div id="participants-table">
          <table>
            <thead>
              <tr>
                <th></th>
                {PARTICIPANT_NICK_NAMES.map((name) => (
                  <th key={name}>{name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {mapOverRange(0, 6, (day) => {
                const weekDate = new Date(weekStartDate);

                weekDate.setDate(weekDate.getDate() + day + 1);

                const crntWeekDate = formatToDateString(weekDate);

                return (
                  <tr key={day}>
                    <td>{crntWeekDate}</td>
                    {PARTICIPANT_NICK_NAMES.map((nickName, i) => {
                      return (
                        <td key={crntWeekDate + nickName + i}>
                          {
                            dashboardScreenData.participantsDataForWeek[
                              nickName
                            ].weekStats[crntWeekDate]
                          }
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
              <tr>
                <td>
                  <b>Total Steps</b>
                </td>
                {PARTICIPANT_NICK_NAMES.map((nickName, i) => {
                  const totalSteps =
                    dashboardScreenData.participantsDataForWeek[nickName]
                      .totalSteps;
                  const isHighestSteps =
                    totalSteps === highestStepsCount && totalSteps !== 0;

                  return (
                    <td
                      key={nickName + i}
                      style={{
                        color: isHighestSteps ? "green" : "black",
                        fontWeight: isHighestSteps ? "bold" : "normal",
                      }}
                    >
                      {isHighestSteps ? "🤩" : ""} {totalSteps}{" "}
                      {isHighestSteps ? "🤩" : ""}
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
