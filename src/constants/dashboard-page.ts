import { DashboardChartViewMode } from "../pages/Dashboard/dashboard-chart-view-mode.tsx";
import { DashboardTableViewMode } from "../pages/Dashboard/dashboard-table-view-mode.tsx";
import type { ITab } from "../types/container-page";

export const DashboardTableViewModeTab = {
  name: "Table View - Details Mode",
  component: DashboardTableViewMode,
};

export const DashboardChartViewModeTab = {
  name: "Chart View - Summary Mode",
  component: DashboardChartViewMode,
};

export const tabs: ITab[] = [
  DashboardTableViewModeTab,
  DashboardChartViewModeTab,
];
