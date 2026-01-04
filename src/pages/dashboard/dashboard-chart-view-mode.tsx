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
import { getDefaultNickNames } from "../../utils/app-utils";
import { useDashboardPageContext } from "../../context/dashboard-page/dashboard-page-context";

Chart.register(
  Colors,
  Legend,
  BarController,
  LinearScale,
  BarElement,
  CategoryScale,
  ChartDataLabels
);

const CANVAS_ID = "dashboard-chart-view-canvas";

export const DashboardChartViewMode = () => {
  const chartInstanceRef = useRef<Chart | null>(null);
  const { dashboardScreenData } = useDashboardPageContext();

  useEffect(() => {
    const canvasContainer = document.getElementById(
      CANVAS_ID
    ) as HTMLCanvasElement | null;

    if (!canvasContainer) return;

    chartInstanceRef.current = new Chart(canvasContainer, {
      type: "bar",
      data: {
        labels: getDefaultNickNames(),
        datasets: [
          {
            label: "Total steps this week by each Participant",
            data: getDefaultNickNames().map((nickName) => {
              const participantData =
                dashboardScreenData.participantsDataForWeek[nickName];

              return participantData ? participantData.totalSteps : 0;
            }),
            backgroundColor: "rgba(75, 192, 192, 0.6)",
          },
        ],
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
  }, [dashboardScreenData.weekNo]);

  return (
    <div>
      <canvas id={CANVAS_ID}></canvas>
    </div>
  );
};
