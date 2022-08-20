import { SceneBulbIcon } from "./Icons";

const Scenes = () => {
  const SceneArray = [
    {
      scene: "Birthday",
      color: "#FF9B9B",
    },
    {
      scene: "Party",
      color: "#A693EB",
    },
    {
      scene: "Relax",
      color: "#93CAEB",
    },
    {
      scene: "Fun",
      color: "#89DD94",
    },
  ];

  return (
    <>
      <h2 className="SubTitleStyle pt-[29px]">Scenes</h2>

      <div className="grid grid-cols-2 gap-x-[25px] gap-y-[19px] mt-[23px]">
        {SceneArray.map((theme, index) => (
          <button
            key={index}
            className={`w-[150px] h-[55px] rounded-[13px] text-white font-bold text-[13px] flex justify-left gap-[23px] pl-[25px] items-center gradient${theme.scene}`}
          >
            <div>
              {/* <img src={sceneBulb} alt="bubllogo"/> */}
              <SceneBulbIcon />
            </div>
            {theme.scene}
          </button>
        ))}
      </div>
    </>
  );
};

export default Scenes;
