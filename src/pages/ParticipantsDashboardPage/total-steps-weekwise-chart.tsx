import { useCallback, useMemo, useState } from "react";
import {
  getDefaultNickNames,
  geTotalStepsWeekByWeek,
  getWeekLabels,
} from "../../utils/app-utils";
import { LineChartContainer } from "../../common-components/charts/line-chart-container";

const CANVAS_ID = "total-steps-weekwise-chart-canvas";

export const TotalStepsWeekWiseChart = () => {
  const [participantNickname, setParticipantNickname] = useState<
    string | undefined
  >(undefined);

  const handleNickNameChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedValue = event.target.value;
      if (selectedValue === "all-participants") {
        setParticipantNickname(undefined);
      } else {
        setParticipantNickname(selectedValue);
      }
    },
    []
  );

  const ControlsComponent = useMemo(() => {
    return () => (
      <div>
        <label htmlFor="select-participant-tswc" className="control">
          <b>Select Participant: </b>
        </label>
        <select
          name="Select Participant"
          id="select-participant-tswc"
          className="ml-2"
          onChange={handleNickNameChange}
        >
          <option value="all-participants">-- All Participants --</option>
          {getDefaultNickNames().map((nickName) => (
            <option key={nickName} value={nickName}>
              {nickName}
            </option>
          ))}
        </select>
      </div>
    );
  }, [handleNickNameChange]);

  return (
    <div id="total-steps-weekwise-chart-component">
      <LineChartContainer
        canvasId={CANVAS_ID}
        ControlsComponent={ControlsComponent}
        labels={getWeekLabels()}
        datasets={geTotalStepsWeekByWeek(participantNickname)}
        header="Total Steps Week Wise Chart"
      />
    </div>
  );
};
