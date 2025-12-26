import type { ITab } from "../../types/container-page";
import "./tab.css";

interface IProps {
  tab: ITab;
  isSelected: boolean;
}

export const TabComponent = (props: IProps) => {
  return (
    <div
      id="tab"
      className={props.isSelected ? "selected-tab" : "not-selected"}
    >
      {props.tab.name}
    </div>
  );
};
