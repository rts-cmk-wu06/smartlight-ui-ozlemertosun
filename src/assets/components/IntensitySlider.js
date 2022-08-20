import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useEffect, useMemo, useState } from "react";
import { throttle } from "lodash";
import "../../styles/slider.css";
import { LightBulbOnIcon, LightBulbOffIcon } from "./Icons";

const Mark = () => <div className="w-[1px] h-1 bg-gray-400"></div>;

const IntensitySlider = () => {
  const [brightness, setBrightness] = useState(50);

  useEffect(() => {
    fetch(process.env.REACT_APP_IP_ADRESS, {
      method: "PUT",
      body: JSON.stringify({
        bri: brightness,
      }),
    });
  }, [brightness]);

  useEffect(() => {
    fetch(process.env.REACT_APP_IP_ADRESS, {
      method: "PUT",
      body: JSON.stringify({
        xy: [0.3227, 0.329],
      }),
    });
  }, []);

  const changeBri = (value) => {
    setBrightness(value);
    console.log(value);
  };

  const _ = require("lodash");
  const useThrottle = useMemo(() => throttle(changeBri, 110), []);

  return (
    <div>
      <h2 className="SubTitleStyle pt-[29px] pb-[21px]">Intensity</h2>

      <div className="flex items-end">
        {/* OFFBULB */}
        <div>
          <LightBulbOffIcon />
        </div>

        <div className="px-[15px] w-full">
          <Slider
            handleStyle={{
              background: "white",
              borderColor: "transparent",
              boxShadow: "0px 0px 4px #568BD012",
            }}
            railStyle={{
              background: "lightgray",
              height: "2px",
            }}
            trackStyle={{
              background: "#FFD339",
              height: "2px",
            }}
            min={1}
            max={254}
            step={Math.floor(254 / 5)}
            defaultValue={brightness}
            onChange={useThrottle}
          />

          <div className="flex justify-between mt-1">
            <Mark />
            <Mark />
            <Mark />
            <Mark />
            <Mark />
            <Mark />
          </div>
        </div>

        {/* ONBULB */}
        <div>
          <LightBulbOnIcon />
        </div>
      </div>
    </div>
  );
};

export default IntensitySlider;
