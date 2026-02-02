import { useCallback } from "react";
import { getCurrentWeek, mapOverRange } from "../../utils";
import { useDashboardPageContext } from "../../context/dashboard-page/dashboard-page-context";

export const DashboardControls = () => {
  const {
    startWeekNo,
    endWeekNo,
    selectedWeek,
    handleSelectedWeek,
    setSelectedWeek,
  } = useDashboardPageContext();

  const onGoToCurrentWeekClick = useCallback(() => {
    let crntWeekNo = getCurrentWeek();
    crntWeekNo = crntWeekNo > endWeekNo ? endWeekNo : crntWeekNo;
    setSelectedWeek(crntWeekNo);
  }, []);

  const onGoToPreviousWeekClick = useCallback(() => {
    setSelectedWeek((selectedWeek: number) => {
      return selectedWeek !== startWeekNo ? selectedWeek - 1 : selectedWeek;
    });
  }, []);

  const onGoToNextWeekClick = useCallback(() => {
    setSelectedWeek((selectedWeek: number) => {
      return selectedWeek !== endWeekNo ? selectedWeek + 1 : selectedWeek;
    });
  }, [endWeekNo]);

  return (
    <div id="dashboard-controls">
      <label htmlFor="weeks" className="m-[1rem] control">
        Select Week:{" "}
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
      <span id="week-navigation-buttons">
        <button id="go-to-prev-week" onClick={onGoToPreviousWeekClick}>
          {"<< Previous Week"}
        </button>
        <button id="go-to-crnt-week" onClick={onGoToCurrentWeekClick}>
          Go to current week
        </button>
        <button id="go-to-next-week" onClick={onGoToNextWeekClick}>
          {"Next Week >>"}
        </button>
      </span>
    </div>
  );
};
