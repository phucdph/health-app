import DoughnutChart from "../charts/DoughnutChart";
import LineChart from "../charts/LineChart";
import d01 from "~/assets/images/d01.jpg";
import type { ILineChartData, IProgress } from "~/services/typings";

interface Props {
  progress: IProgress;
  data?: ILineChartData[];
}

const ChartSection: React.FC<Props> = (props) => {
  const { progress, data } = props;
  return (
    <div className="mx-4 sm:mx-8 md:mx-18 lg:mx-28 xl:mx-28 2xl:mx-32 flex flex-nowrap xs:flex-wrap sm:flex-wrap md:flex-nowrap lg:flex-nowrap justify-center">
      <div className="h-[320px] aspect-square">
        <DoughnutChart
          value={progress?.value}
          date={progress?.title}
          image={d01}
        />
      </div>
      <div className="relative h-[320px] w-full flex-1">
        <LineChart data={data} />
      </div>
    </div>
  );
};

export default ChartSection;
