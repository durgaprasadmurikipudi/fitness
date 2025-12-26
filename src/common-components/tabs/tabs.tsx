import type { ITab } from "../../types/container-page";
import { TabComponent } from "./tab";
import "./tabs.css";

interface IProps {
  tabs: ITab[];
  selectedTab: ITab;
  setSelectedTab: (tab: ITab) => void;
}

export const Tabs = (props: IProps) => {
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
