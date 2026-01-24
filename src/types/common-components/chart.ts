export interface ChartProps {
  canvasId: string;
  ControlsComponent?: React.FunctionComponent | null;
  labels: string[];
}

export interface ChartDataset {
  data: number[];
}

export interface LineChartDataset extends ChartDataset {
  fill: boolean;
  tension: number;
  borderColor: string;
  label: string;
  borderWidth: number;
}

export interface LineChartProps extends ChartProps {
  datasets: LineChartDataset[];
}

export interface LineChartContainerProps extends LineChartProps {
  header: string;
}

export interface BarChartDataset extends ChartDataset {
  backgroundColor: string;
  label: string;
}

export interface BarChartProps extends ChartProps {
  datasets: BarChartDataset[];
}
export interface BarChartContainerProps extends BarChartProps {
  header: string;
}
