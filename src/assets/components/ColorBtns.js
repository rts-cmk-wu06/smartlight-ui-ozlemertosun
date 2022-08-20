import extraBtn from "../img/EkstraBtn.svg";
import { useState, useEffect } from "react";
import ChangeColorBtn from "./ChangeColorBtn";

const ColorBtns = () => {
  const ColorArray = [
    { red: "255", green: "155", blue: "155" },
    { red: "148", green: "235", blue: "158" },
    { red: "148", green: "202", blue: "235" },
    { red: "165", green: "148", blue: "235" },
    { red: "222", green: "148", blue: "235" },
    { red: "235", green: "208", blue: "148" },
  ];

  return (
    <>
      <h2 className="SubTitleStyle pt-[29px]">Colors</h2>

      <div className="flex gap-x-[16px] mt-[23px]">
        {ColorArray.map(({ red, green, blue }, i) => (
          <ChangeColorBtn key={i} r={red} g={green} b={blue} />
        ))}
        <div className="w-[29px] h-[29px]">
          <img src={extraBtn} />
        </div>
      </div>
    </>
  );
};

export default ColorBtns;
