export interface IWeekStats {
  weekNo: number;
  steps: [number, number, number, number, number, number, number];
}

export interface IParticipant {
  name: string;
  nickname: string;
  weekStats: { [weekNo: number]: IWeekStats };
  colorCode: string;
}

export interface ITournamentDetails {
  tournamentStartDate: Date;
}
