import type { ILeaderDashboardPageWeekData } from "../types/leader-dashboard-page";

export function getDefaultLeaderDashboardWeekMetric(): ILeaderDashboardPageWeekData {
  return {
    steps: 0,
    name: "",
  };
}
