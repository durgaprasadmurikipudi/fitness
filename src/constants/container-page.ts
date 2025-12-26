import { Dashboard } from "../pages/Dashboard/dashboard.tsx";
import { LeadershipDashboard } from "../pages/LeadershipDashboardPage/leadership-dashboard-page.tsx";
import type { ITab } from "../types/container-page";
import { DefaultComponent } from "../utils/common-utils.tsx";

export const LEADERSHIP_DASHBOARD_TAB_NAME = "Leadership Dashboard";
export const DASHBOARD_TAB_NAME = "Weekly Stats Dashboard";
export const STATS_TAB_NAME = "Particpant's Stats Dashboard";

export const DASHBOARD_TAB = { name: DASHBOARD_TAB_NAME, component: Dashboard };
export const LEADERSHIP_DASHBOARD_TAB = {
  name: LEADERSHIP_DASHBOARD_TAB_NAME,
  component: LeadershipDashboard,
};
export const STATS_TAB = { name: STATS_TAB_NAME, component: DefaultComponent };

export const tabs: ITab[] = [
  DASHBOARD_TAB,
  LEADERSHIP_DASHBOARD_TAB,
  STATS_TAB,
];
