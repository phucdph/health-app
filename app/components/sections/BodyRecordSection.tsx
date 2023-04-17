
import LineChart from "../charts/LineChart";

const BodyRecordSection: React.FC = () => {
  return (
    <div id="body_record" className="pb-14">
      <div className=" bg-text py-4 px-6">
        <div className="mb-1 flex text-light">
          <h4 className="w-24">
            BODY <br />
            RECORD
          </h4>
          <p className="text-2xl">2021.05.21</p>
        </div>
        <div className="h-[320px]">
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default BodyRecordSection;
