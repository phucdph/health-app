import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import type { ChartData, ChartOptions, Plugin } from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
      enabled: false,
    },
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      ticks: {
        color: "white",
        font: {
          size: 16,
        },
      },
      grid: {
        display: true,
        color: "white",
        borderWidth: 1,
      },
    },
    y: {
      display: false,
    },
  },
};

const labels = [
  "6月",
  "7月",
  "8月",
  "9月",
  "10月",
  "11月",
  "12月",
  "1月",
  "2月",
  "3月",
  "4月",
  "5月",
];

function getRndInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const data: ChartData<"line"> = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => getRndInteger(-500, 500)),
      borderColor: "#FFCC21",
      backgroundColor: "#FFCC21",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => getRndInteger(-500, 500)),
      borderColor: "#8FE9D0",
      backgroundColor: "#8FE9D0",
    },
  ],
};

const plugin: Plugin = {
  id: "line-chart",
  beforeDraw: (chart) => {
    const { ctx } = chart;
    ctx.save();
    ctx.globalCompositeOperation = "destination-over";
    ctx.fillStyle = "#414141";
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  },
};

const LineChart = () => {
  return (
    <Line
      className="bg-text p-4"
      plugins={[plugin]}
      options={options}
      data={data}
    />
  );
};

export default LineChart;
