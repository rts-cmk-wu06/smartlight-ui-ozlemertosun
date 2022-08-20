import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  BalconyIcon,
  BathtubeIcon,
  BedIcon,
  HouseIcon,
  KitchenIcon,
  RoomIcon,
} from "./Icons";
import axios from "axios";

const CpButtons = () => {
  const [rooms, setRooms] = useState(null);

  useEffect(() => {
    fetch(
      "http://192.168.8.100/api/T9NSd0MzWqfGCU8NOc7Y4pz0qJvRlVT6LLvQ1ysd/groups/",
      { method: "GET" }
    )
      .then((res) => res.json())
      .then((data) => {
        setRooms(data);
        console.log(data);
      });
  }, []);

  /*   const btnArray = [
    {
      logo: <BedIcon />,
      alt: "bed logo",
      title: "Bed room",
      NrOfLights: 4,
    },
    {
      logo: <RoomIcon />,
      alt: "living room logo",
      title: "living room",
      NrOfLights: 2,
    },
    {
      logo: <KitchenIcon />,
      alt: "Kitchen logo",
      title: "Kitchen",
      NrOfLights: 5,
    },
    {
      logo: <BathtubeIcon />,
      alt: "Bathtube logo",
      title: "Bathroom",
      NrOfLights: 1,
    },
    {
      logo: <HouseIcon />,
      alt: "outdoor logo",
      title: "Outdoor",
      NrOfLights: 5,
    },
    {
      logo: <BalconyIcon />,
      alt: "Balcony logo",
      title: "Balcony",
      NrOfLights: 2,
    },
  ];
 */
  return (
    <div className="grid grid-cols-2 gap-y-[19px] gap-x-[24px] mt-[20px]">
      {rooms &&
        Object.values(rooms).map(({ name, lights }, i) => {
          const id = Object.keys(rooms)[i];

          return (
            <Link to={`/settings/${id}`} key={i}>
              <button
                key={i}
                className="bg-white w-[150px] h-[150px] rounded-[24px] pl-[19px] text-left flex-col"
              >
                <div className="pt-[24.5px]"> {name} </div>
                <h3 className="pt-[26px] ButtonTitleStyle">
                  <HouseIcon />
                </h3>
                <p className="ButtonSubTitleStyle">{lights.length} lights</p>
              </button>
            </Link>
          );
        })}
    </div>
  );
};

export default CpButtons;
