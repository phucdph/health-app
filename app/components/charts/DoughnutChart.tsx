import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import type { ChartData, ChartOptions, Plugin } from "chart.js";
import { useMemo } from "react";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  value: number;
  date: string;
  image: string;
}

const DoughnutChart = ({ value, date, image }: DoughnutChartProps) => {
  const plugin: Plugin<"doughnut"> = useMemo(
    () => ({
      id: "DoughnutChart",
      beforeDraw: (chart) => {
        const width = chart.width,
          height = chart.height,
          ctx = chart.ctx;

        const centerX = width / 2,
          centerY = height / 2;

        ctx.beginPath();
        ctx.fill();

        ctx.shadowColor = "#FC7400";
        ctx.shadowBlur = 6;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;

        //Date
        ctx.font = "bold 16px sans-serif";
        ctx.textAlign = "center";
        ctx.fillStyle = "white";
        ctx.fillText(`${date}`, centerX - 30, centerY + 4);

        //Percent
        ctx.font = "bold 24px sans-serif";
        ctx.textAlign = "center";
        ctx.fillStyle = "white";
        ctx.fillText(`${value}%`, centerX + 30, centerY + 7);
        ctx.restore();
        ctx.save();
      },
    }),
    [date, value]
  );

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    layout: {
      padding: 10,
    },
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
    cutout: "95%",
  };

  const data: ChartData<"doughnut"> = {
    labels: [],
    datasets: [
      {
        data: [75, 25],
        backgroundColor: ["white", "transparent"],
        borderColor: ["transparent", "transparent"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="relative h-full w-full bg-liner opacity-100 mix-blend-soft-light">
      <img
        src={image}
        className="w-full h-full object-cover"
        alt="Doughnut Chart"
        style={{ filter: "blur(4px)" }}
      />
      <div className="absolute top-1/2 left-1/2 flex h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 transform">
        <Doughnut data={data} plugins={[plugin]} options={options} />
      </div>
    </div>
  );
};

export default DoughnutChart;
