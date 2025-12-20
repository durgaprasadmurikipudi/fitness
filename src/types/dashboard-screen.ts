export interface ParticipantDataForAGivenWeek {
  weekStats: {
    [dateOnThatDay: string]: number;
  };
  totalSteps: number;
}

export interface ParticipantsDataForAGivenWeek {
  [participantName: string]: ParticipantDataForAGivenWeek;
}

export interface DashboardScreenData {
  weekNo: number;
  participantsDataForWeek: ParticipantsDataForAGivenWeek;
}
