import { useParams } from "react-router";
import { BackArrowIcon, HeaderLampIcon } from "./Icons";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const SettingsHeader = () => {
  const navigate = useNavigate();
  const [room, setRoom] = useState(null);
  const { name } = useParams();

  console.log(name);

  useEffect(() => {
    fetch(
      "http://192.168.8.100/api/T9NSd0MzWqfGCU8NOc7Y4pz0qJvRlVT6LLvQ1ysd/groups/" +
        name,
      { method: "GET" }
    )
      .then((res) => res.json())
      .then((res) => {
        setRoom(res);
      });
  }, []);
  room && console.log(room);
  return (
    <>
      {room && (
        <div className="flex justify-between CustomPadding">
          <div className="pt-[43px] w-[85px]">
            <div className="flex-col justify-between items-center">
              <div className="flex">
                <button className="pr-2" onClick={() => navigate(-1)}>
                  <BackArrowIcon />
                </button>
                <h1 className="TitleStyle">{room.name}</h1>
              </div>

              <h2 className="text-[#FFD339] font-bold ml-4 mt-2">
                {room.lights.length} Lights
              </h2>
            </div>
          </div>

          <div className="pt-[0px]">
            <HeaderLampIcon />
          </div>
        </div>
      )}
    </>
  );
};

export default SettingsHeader;
