import {
  Chart,
  Colors,
  Legend,
  BarController,
  LinearScale,
  BarElement,
  CategoryScale,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useEffect, useRef } from "react";
import type { BarChartProps } from "../../types/common-components/chart";

Chart.register(
  Colors,
  Legend,
  ChartDataLabels,
  BarController,
  LinearScale,
  BarElement,
  CategoryScale
);

export const BarChart = (props: BarChartProps) => {
  const { canvasId, ControlsComponent, labels, datasets } = props;
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    const canvasContainer = document.getElementById(
      canvasId
    ) as HTMLCanvasElement | null;

    if (!canvasContainer) return;

    chartInstanceRef.current = new Chart(canvasContainer, {
      type: "bar",
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
          datalabels: {
            color: "black",
            anchor: "end" as const,
            align: "top" as const,
            font: {
              weight: "bold" as const,
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Number of Steps",
            },
          },
          x: {
            title: {
              display: true,
              text: "Participants",
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
        <canvas id={canvasId}></canvas>
      </div>
    </div>
  );
};
