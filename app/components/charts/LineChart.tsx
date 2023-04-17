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
import { useMemo } from "react";
import type { ILineChartData } from "~/services/typings";

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

interface Props {
  data?: ILineChartData[];
}

const colors = ["#FFCC21", "#8FE9D0"];

const LineChart: React.FC<Props> = (props) => {
  const { data: chartData } = props;
  const data: ChartData<"line"> = useMemo(
    () => ({
      labels: chartData?.[0]?.data?.map((i) => i.label) || [],
      datasets:
        chartData?.map((d, index) => ({
          label: d.label,
          data: d?.data?.map((i) => i.value) || [],
          borderColor: colors[index],
          backgroundColor: colors[index],
        })) || [],
    }),
    [chartData]
  );
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
