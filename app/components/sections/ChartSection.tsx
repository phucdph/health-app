import DoughnutChart from "../charts/DoughnutChart";
import LineChart from "../charts/LineChart";
import d01 from "~/assets/images/d01.jpg";

const ChartSection: React.FC = () => {
  return (
    <div className="mx-4 sm:mx-8 md:mx-18 lg:mx-28 xl:mx-28 2xl:mx-32 flex flex-nowrap xs:flex-wrap sm:flex-wrap md:flex-nowrap lg:flex-nowrap justify-center">
      <div className="h-[320px] aspect-square">
        <DoughnutChart value={70} date="05/21" image={d01} />
      </div>
      <div className="relative h-[320px] w-full flex-1">
        <LineChart />
      </div>
    </div>
  );
};

export default ChartSection;
