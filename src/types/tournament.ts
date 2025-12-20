export interface WeekStats {
  weekNo: number;
  steps: [number, number, number, number, number, number, number];
}

export interface Participant {
  name: string;
  nickname: string;
  weekStats: { [weekNo: number]: WeekStats };
}

export interface TournamentDetails {
  tournamentStartDate: Date;
}
