import type { Tab } from "../../types/container-page";
import "./tab.css";

interface Props {
  tab: Tab;
  isSelected: boolean;
}

export const TabComponent = (props: Props) => {
  return (
    <div id="tab" className={props.isSelected ? "selected-tab" : ""}>
      {props.tab.name}
    </div>
  );
};
