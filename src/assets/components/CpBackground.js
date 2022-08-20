import CpButtons from "./CpButtons";

const CpBackground = () => {
  return (
    <div className="bg-[#F6F8FB] px-6 mt-6 rounded-t-[31px] fixed bottom-[66px] w-full pb-5">
      <h2 className="SubTitleStyle pt-[29px]">All Rooms</h2>
      <div className="h-[500px] overflow-scroll">
        <CpButtons />
      </div>
    </div>
  );
};

export default CpBackground;
