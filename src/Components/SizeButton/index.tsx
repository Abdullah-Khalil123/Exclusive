"use client";
import React, { Dispatch } from "react";
import style from "./sizebutton.module.css";
import { useState } from "react";

const SizeButtons = ({ sizes = [] }: { sizes: string[] }) => {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  return (
    <div className={style.sizeButtons}>
      {sizes.map((size) => (
        <SizeButton
          size={size}
          active={selectedSize == size ? true : false}
          setSelected={setSelectedSize}
        />
      ))}
    </div>
  );
};

const SizeButton = ({
  size,
  active,
  setSelected,
}: {
  size: string;
  active: boolean;
  setSelected: Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div
      className={`${style.sizeButton} ${
        active ? style.sizeButtonActive : null
      }`}
      onClick={() => {
        setSelected(size);
      }}
    >
      <p>{size}</p>
    </div>
  );
};
export default SizeButtons;
