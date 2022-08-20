// import sceneBulb from "../img/sceneBulb.svg";
import { motion } from "framer-motion";
import { ThemeSelectionBulbIcon } from "./Icons";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useUrlContext } from "./urlContext";

const LightBtn = ({ id, activeLight, setActiveLight }) => {
  const [lightData, setLightData] = useState();

  useEffect(() => {
    fetch(
      "http://192.168.8.100/api/T9NSd0MzWqfGCU8NOc7Y4pz0qJvRlVT6LLvQ1ysd/lights/" +
        id,
      { method: "GET" }
    )
      .then((res) => res.json())
      .then((data) => {
        setLightData(data);
      });
  }, []);
  console.log(lightData);
  return (
    <button
      onClick={() => setActiveLight(id)}
      style={{ backgroundColor: activeLight === id ? "navy" : "white" }}
      className="w-[124px] h-[45px] bg-white rounded-[12px] flex items-center justify-evenly"
    >
      <div className="SubtitleStyle">
        <ThemeSelectionBulbIcon />
      </div>
      {lightData && <p className="text-[13px] font-bold">{lightData.name}</p>}
    </button>
  );
};

const LightSelection = () => {
  const { activeUrlLight, setActiveUrlLight } = useUrlContext();
  const [lightdata, setLightdata] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    fetch(
      "http://192.168.8.100/api/T9NSd0MzWqfGCU8NOc7Y4pz0qJvRlVT6LLvQ1ysd/groups/" +
        name,
      { method: "GET" }
    )
      .then((res) => res.json())
      .then((data) => {
        setLightdata(data);
      });
  }, []);

  const LightArray = [
    "Main Light",
    "Desk Lights",
    "Bed Light",
    "Floor Lamp",
    "lamp",
    "sky",
  ];

  return (
    <div className="pt-6">
      <motion.div
        drag="x"
        dragConstraints={{ top: 0, bottom: 0, left: -500, right: 24 }}
        dragDirectionLock
        initial={{ x: 24 }}
        className={`grid auto-cols-max grid-flow-col gap-[15px] mw-[calc(100%*${LightArray.length})]`}
      >
        {lightdata &&
          lightdata.lights.map((light, index) => (
            <LightBtn
              key={index}
              id={light}
              name={name}
              activeLight={activeUrlLight}
              setActiveLight={setActiveUrlLight}
            />
          ))}
      </motion.div>
    </div>
  );
};

export default LightSelection;
