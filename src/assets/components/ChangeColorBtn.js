import ColorConverter from "cie-rgb-color-converter";
import { useState, useEffect } from "react";

const ChangeColorBtn = ({ r, g, b }) => {
  let xy = ColorConverter.rgbToXy(r, g, b);
  const [color, setColor] = useState([]);

  function changeColor() {
    setColor(xy);
    fetch(process.env.REACT_APP_IP_ADRESS, {
      method: "PUT",
      body: JSON.stringify({
        xy: [color.x, color.y],
      }),
    });
  }

  return (
    <button
      onClick={changeColor}
      className="w-[29px] h-[29px] rounded-full"
      style={{ background: `rgb(${r}, ${g}, ${b})` }}
    ></button>
  );
};

export default ChangeColorBtn;
