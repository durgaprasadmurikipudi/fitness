import type { Tab } from "../../types/container-page";
import { TabComponent } from "./tab";
import "./tabs.css";

interface Props {
  tabs: Tab[];
  selectedTab: Tab;
  setSelectedTab: (tab: Tab) => void;
}

export const Tabs = (props: Props) => {
  return (
    <div id="tabs">
      {props.tabs.map((tab) => (
        <div onClick={() => props.setSelectedTab(tab)}>
          <TabComponent
            tab={tab}
            isSelected={tab.name === props.selectedTab.name}
          />
        </div>
      ))}
    </div>
  );
};
