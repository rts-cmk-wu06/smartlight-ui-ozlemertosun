import axios from "axios";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import ColorBtns from "./ColorBtns";
import { PowerButton } from "./Icons";
import IntensitySlider from "./IntensitySlider";
import Scenes from "./Scenes";
import { useUrlContext } from "./urlContext";

const SettingsBg = () => {
  const [on, setOn] = useState(true);
  const { activeUrlLight } = useUrlContext();
  const { name } = useParams();
  useEffect(() => {
    axios({
      url: `http://192.168.8.100/api/T9NSd0MzWqfGCU8NOc7Y4pz0qJvRlVT6LLvQ1ysd/${
        activeUrlLight
          ? `lights/${activeUrlLight}/state`
          : `groups/${name}/action`
      }`,
      method: "PUT",
      data: { on },
    });
  }, [on]);

  return (
    <div className="">
      <div className="bg-[#F6F8FB] px-6 rounded-t-[31px] h-[472px] fixed bottom-[67px] w-full">
        <button
          onClick={() => setOn(!on)}
          className="absolute right-5 -top-5 z-50"
        >
          <PowerButton />
        </button>
        <IntensitySlider />
        <ColorBtns />
        <Scenes />
      </div>
    </div>
  );
};

export default SettingsBg;
