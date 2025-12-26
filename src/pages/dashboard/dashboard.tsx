import { DashboardTableViewMode } from "./dashboard-table-view-mode";
import { Tabs } from "../../common-components/tabs/tabs";
import {
  DashboardTableViewModeTab,
  tabs,
} from "../../constants/dashboard-page";
import { useState } from "react";
import type { ITab } from "../../types/container-page";
import "./dashboard.css";
import { DashboardPageContext } from "../../context/dashboard-page/dashboard-page-context";

export const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState<ITab>(
    DashboardTableViewModeTab
  );

  return (
    <div id="dashboard">
      <Tabs
        tabs={tabs}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <div id="dashboard-container">
        <DashboardPageContext>
          {selectedTab === DashboardTableViewModeTab && (
            <DashboardTableViewMode />
          )}
        </DashboardPageContext>
      </div>
    </div>
  );
};
