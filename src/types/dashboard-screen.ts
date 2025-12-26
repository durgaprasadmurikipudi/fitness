export interface IParticipantDataForAGivenWeek {
  weekStats: {
    [dateOnThatDay: string]: number;
  };
  totalSteps: number;
  highestSteps: number;
}

export interface IParticipantsDataForAGivenWeek {
  [participantName: string]: IParticipantDataForAGivenWeek;
}

export interface IDashboardScreenData {
  weekNo: number;
  participantsDataForWeek: IParticipantsDataForAGivenWeek;
  highestStepsInTheWeek: number;
}

export interface IDashboardTableProps {
  weekStartDate: Date;
  dashboardScreenData: IDashboardScreenData;
}

export interface IHighlightedTableCellProps {
  nickname: string;
  index: number;
  shouldHightlight: boolean;
  data: string;
}

export interface ITotalStepsRowProps {
  dashboardScreenData: IDashboardScreenData;
  winnerStepsCount: number;
}

export interface IAverageStepsRowProps {
  dashboardScreenData: IDashboardScreenData;
}

export interface IHighestStepsRowProps {
  dashboardScreenData: IDashboardScreenData;
  highestStepsForThatWeek: number;
}

export interface IStepsRowsProps {
  dashboardScreenData: IDashboardScreenData;
  weekStartDate: Date;
}
