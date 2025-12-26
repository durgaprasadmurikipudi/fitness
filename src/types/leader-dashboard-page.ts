export interface ILeaderDashboardPageWeekData {
  steps: number;
  name: string;
}

export interface ILeaderDashboardPage {
  [weekNo: string]: ILeaderDashboardPageWeekData;
}
