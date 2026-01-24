import type { BarChartContainerProps } from "../../types/common-components/chart";
import { BarChart } from "./bar-chart";
import "./chart-container.css";

export const BarChartContainer = (props: BarChartContainerProps) => {
  const { canvasId, ControlsComponent, labels, datasets = [], header } = props;

  return (
    <div id="chart-component">
      <label className="inline-block font-bold text-orange-400 mt-[0.5rem] mb-[1rem]">
        {header}
      </label>
      <BarChart
        canvasId={canvasId}
        ControlsComponent={ControlsComponent}
        labels={labels}
        datasets={datasets}
      />
    </div>
  );
};
