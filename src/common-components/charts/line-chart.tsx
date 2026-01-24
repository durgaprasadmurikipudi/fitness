import {
  CategoryScale,
  PointElement,
  Chart,
  Colors,
  Legend,
  LinearScale,
  LineController,
  LineElement,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useEffect, useRef } from "react";
import type { LineChartProps } from "../../types/common-components/chart";

Chart.register(
  Colors,
  Legend,
  ChartDataLabels,
  PointElement,
  LineController,
  LinearScale,
  LineElement,
  CategoryScale
);

export const LineChart = (props: LineChartProps) => {
  const { canvasId, ControlsComponent, labels, datasets = [] } = props;
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    const canvasContainer = document.getElementById(
      canvasId
    ) as HTMLCanvasElement | null;

    if (!canvasContainer) return;

    chartInstanceRef.current = new Chart(canvasContainer, {
      type: "line",
      data: {
        labels,
        datasets,
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: "top" as const,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Participants",
            },
          },
          x: {
            title: {
              display: true,
              text: "Weeks",
            },
          },
        },
      },
    });

    return () => {
      chartInstanceRef.current?.destroy();
    };
  }, [labels, datasets, canvasId]);

  return (
    <div>
      <div>{ControlsComponent ? <ControlsComponent /> : null}</div>
      <div>
        <canvas width={100} id={canvasId}></canvas>
      </div>
    </div>
  );
};
