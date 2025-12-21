export interface ParticipantDataForAGivenWeek {
  weekStats: {
    [dateOnThatDay: string]: number;
  };
  totalSteps: number;
  highestSteps: number;
}

export interface ParticipantsDataForAGivenWeek {
  [participantName: string]: ParticipantDataForAGivenWeek;
}

export interface DashboardScreenData {
  weekNo: number;
  participantsDataForWeek: ParticipantsDataForAGivenWeek;
  highestStepsInTheWeek: number;
}

export interface DashboardTableProps {
  weekStartDate: Date;
  dashboardScreenData: DashboardScreenData;
}

export interface HighlightedTableCellProps {
  nickname: string;
  index: number;
  shouldHightlight: boolean;
  data: string;
}

export interface TotalStepsRowProps {
  dashboardScreenData: DashboardScreenData;
  winnerStepsCount: number;
}

export interface AverageStepsRowProps {
  dashboardScreenData: DashboardScreenData;
}

export interface HighestStepsRowProps {
  dashboardScreenData: DashboardScreenData;
  highestStepsForThatWeek: number;
}

export interface StepsRowsProps {
  dashboardScreenData: DashboardScreenData;
  weekStartDate: Date;
}
