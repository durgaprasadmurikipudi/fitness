import {
  Chart,
  Colors,
  Legend,
  BarController,
  LinearScale,
  BarElement,
  CategoryScale,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  getDefaultNickNames,
  getParticipantsData,
} from "../../utils/app-utils";
import { BarChartContainer } from "../../common-components/charts/bar-chart-container";
import { useDashboardPageContext } from "../../context/dashboard-page/dashboard-page-context";
import { LineChartContainer } from "../../common-components/charts/line-chart-container";
import type {
  BarChartDataset,
  LineChartDataset,
} from "../../types/common-components/chart";
import { useCallback, useMemo, useState } from "react";
import {
  forEachOverRange,
  formatToDateString,
  getStartDateForWeekNo,
} from "../../utils";

Chart.register(
  Colors,
  Legend,
  ChartDataLabels,
  BarController,
  LinearScale,
  BarElement,
  CategoryScale
);

const totalStepsThisWeekByParticipantsCanvasId =
  "total-steps-by-participant-current-week-bar-chart";
const dayByDayStepsByParticipantsCanvasId =
  "day-by-day-steps-by-participant-line-chart";

export const DashboardChartViewMode = () => {
  const { dashboardScreenData } = useDashboardPageContext();
  const [selectedParticipant, setSelectedParticipant] = useState<
    string | undefined
  >();
  const handleNickNameChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedValue = event.target.value;
      if (selectedValue === "all-participants") {
        setSelectedParticipant(undefined);
      } else {
        setSelectedParticipant(selectedValue);
      }
    },
    []
  );

  const totalStepsThisWeekByParticipants: BarChartDataset[] = [
    {
      data: getDefaultNickNames().map((nickName) => {
        const participantData =
          dashboardScreenData.participantsDataForWeek[nickName];
        return participantData ? participantData.totalSteps : 0;
      }),
      backgroundColor: "rgba(75, 192, 192, 0.6)",
      label: "Total steps this week by each Participant",
    },
  ];
  const dayByDayStepsByParticipants: LineChartDataset[] = useMemo(
    () =>
      selectedParticipant
        ? [
            {
              data:
                Object.values(
                  dashboardScreenData.participantsDataForWeek[
                    selectedParticipant
                  ]?.weekStats
                ) || [],

              borderColor: "rgba(153, 102, 255, 1)",
              label: selectedParticipant,
              fill: false,
              borderWidth: 1,
              tension: 0.1,
            },
          ]
        : getDefaultNickNames().map((nickName) => ({
            data:
              Object.values(
                dashboardScreenData.participantsDataForWeek[nickName]?.weekStats
              ) || [],

            borderColor:
              getParticipantsData().find(
                (participant) => participant.nickname === nickName
              )?.colorCode || "rgba(0, 0, 0, 1)",
            label: nickName,
            borderWidth: 1,
            fill: false,
            tension: 0.1,
          })),
    [dashboardScreenData, selectedParticipant]
  );
  const weekDateLabels = useMemo(() => {
    const labels: string[] = [];
    forEachOverRange(0, 6, (day) => {
      const weekDate = new Date(
        getStartDateForWeekNo(dashboardScreenData.weekNo)
      );

      weekDate.setDate(weekDate.getDate() + day + 1);

      labels.push(formatToDateString(weekDate));
    });

    return labels;
  }, [dashboardScreenData.weekNo]);

  const ControlsComponent = useMemo(() => {
    return () => (
      <div>
        <label htmlFor="select-participant-dcvm" className="control">
          <b>Select Participant: </b>
        </label>
        <select
          name="Select Participant"
          id="select-participant-dcvm"
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
    <div>
      <BarChartContainer
        canvasId={totalStepsThisWeekByParticipantsCanvasId}
        header="Total steps this week by each Participant"
        datasets={totalStepsThisWeekByParticipants}
        labels={getDefaultNickNames()}
        ControlsComponent={null}
      />
      <LineChartContainer
        canvasId={dayByDayStepsByParticipantsCanvasId}
        header="Day by Day steps this week"
        datasets={dayByDayStepsByParticipants}
        labels={weekDateLabels}
        ControlsComponent={ControlsComponent}
      />
    </div>
  );
};
