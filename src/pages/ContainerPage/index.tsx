import { useState } from "react";
import { Tabs } from "../../common-components/tabs/tabs";
import { DASHBOARD_TAB, tabs } from "../../constants/container-page";
import "./index.css";
import type { ITab } from "../../types/container-page";

export const IndexPage = () => {
  const [tab, selectedTab] = useState<ITab>(DASHBOARD_TAB);
  const Component = tab.component;

  return (
    <div id="header">
      <h2 className="mt-[1rem] mb-[1rem] pb-1 border-b-[1px] border-solid border-black font-bold">
        Welcome to Tournament: The Walking Master! 🚶🏽‍♂️‍➡️
      </h2>
      <Tabs tabs={tabs} selectedTab={tab} setSelectedTab={selectedTab} />
      <div id="component-container">
        <Component />
      </div>
    </div>
  );
};
