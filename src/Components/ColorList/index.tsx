"use client";
import React, { Dispatch, useState } from "react";
import style from "./colors.module.css";

const ShowColorsList = ({ colors = [""] }: { colors: string[] }) => {
  const [selectedColor, setSelectedColor] = useState<string>(colors[0]);
  return (
    <div style={{ display: "flex", alignContent: "center" }}>
      {colors.map((color) => (
        <ColorsCircle
          setSelected={setSelectedColor}
          active={selectedColor == color ? true : false}
          color={color}
        />
      ))}
    </div>
  );
};

const ColorsCircle = ({
  color,
  active,
  setSelected,
}: {
  color: string;
  active: boolean;
  setSelected: Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div
      className={active ? style.activeBorder : style.InactiveBorder}
      onClick={() => {
        setSelected(color);
      }}
    >
      <div
        className={style.colorCirle}
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
};

export default ShowColorsList;
