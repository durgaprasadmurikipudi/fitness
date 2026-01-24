import type { LineChartContainerProps } from "../../types/common-components/chart";
import { LineChart } from "./line-chart";
import "./chart-container.css";

export const LineChartContainer = (props: LineChartContainerProps) => {
  const { canvasId, ControlsComponent, labels, datasets = [], header } = props;

  return (
    <div id="chart-component">
      <label className="inline-block font-bold text-orange-400 mt-[0.5rem] mb-[1rem]">
        {header}
      </label>
      <LineChart
        canvasId={canvasId}
        ControlsComponent={ControlsComponent}
        labels={labels}
        datasets={datasets}
      />
    </div>
  );
};
