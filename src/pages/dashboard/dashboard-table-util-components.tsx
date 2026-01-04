import type {
  IAverageStepsRowProps,
  IHighestStepsRowProps,
  IHighlightedTableCellProps,
  IStepsRowsProps,
  ITotalStepsRowProps,
} from "../../types";
import { formatToDateString, mapOverRange } from "../../utils";
import { getDefaultNickNames } from "../../utils/app-utils";

export const StepsRows = (props: IStepsRowsProps) => {
  const { weekStartDate, dashboardScreenData } = props;

  return (
    <>
      {mapOverRange(0, 6, (day) => {
        const weekDate = new Date(weekStartDate);

        weekDate.setDate(weekDate.getDate() + day + 1);

        const crntWeekDate = formatToDateString(weekDate);

        return (
          <tr key={day}>
            <td>{crntWeekDate}</td>
            {getDefaultNickNames().map((nickName, i) => {
              return (
                <td key={crntWeekDate + nickName + i}>
                  {
                    dashboardScreenData.participantsDataForWeek[nickName]
                      .weekStats[crntWeekDate]
                  }
                </td>
              );
            })}
          </tr>
        );
      })}
    </>
  );
};

export const TotalStepsRow = (props: ITotalStepsRowProps) => {
  const { dashboardScreenData, winnerStepsCount } = props;

  return (
    <>
      {getDefaultNickNames().map((nickName, i) => {
        const totalSteps =
          dashboardScreenData.participantsDataForWeek[nickName].totalSteps;
        const isWinnerStepsCount =
          totalSteps === winnerStepsCount && totalSteps !== 0;

        return (
          <HighlightTableCell
            data={totalSteps?.toString()}
            shouldHightlight={isWinnerStepsCount}
            nickname={nickName}
            index={i}
          />
        );
      })}
    </>
  );
};

export const AverageStepsRow = (props: IAverageStepsRowProps) => {
  const { dashboardScreenData } = props;

  return (
    <>
      {getDefaultNickNames().map((nickName, i) => {
        const totalSteps =
          dashboardScreenData.participantsDataForWeek[nickName].totalSteps;

        return (
          <td key={nickName + i}>
            <b>{Number(totalSteps / 7).toFixed(2)}</b>
          </td>
        );
      })}
    </>
  );
};

export const HighestStepsRow = (props: IHighestStepsRowProps) => {
  const { dashboardScreenData, highestStepsForThatWeek } = props;

  return (
    <>
      {getDefaultNickNames().map((nickName, i) => {
        const participantHighestStepsForTheWeek =
          dashboardScreenData.participantsDataForWeek[nickName].highestSteps;
        const ishighestStepsCountWinner =
          highestStepsForThatWeek === participantHighestStepsForTheWeek &&
          participantHighestStepsForTheWeek !== 0;

        return (
          <HighlightTableCell
            data={participantHighestStepsForTheWeek?.toString()}
            shouldHightlight={ishighestStepsCountWinner}
            nickname={nickName}
            index={i}
          />
        );
      })}
    </>
  );
};

const HighlightTableCell = (props: IHighlightedTableCellProps) => {
  const { nickname, index, data, shouldHightlight } = props;
  return (
    <td
      key={nickname + index}
      style={{
        color: shouldHightlight ? "green" : "black",
      }}
    >
      <b>
        {shouldHightlight ? "🤩" : ""} {data} {shouldHightlight ? "🤩" : ""}
      </b>
    </td>
  );
};
