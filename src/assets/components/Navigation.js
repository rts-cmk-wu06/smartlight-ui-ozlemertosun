import { BulbIcon, HomeIcon, SettingsIcon } from "./Icons";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div className=" bg-white h-[67px] w-full flex items-center pl-[93px] fixed bottom-0">
      <button>
        <BulbIcon />
      </button>
      <button onClick={() => navigate("/")} className="px-[65px]">
        <HomeIcon />
      </button>
      <button onClick={() => navigate("/settings/Bedroom")}>
        <SettingsIcon />
      </button>
    </div>
  );
};

export default Navigation;
