"use client";
import React, { CSSProperties, useState } from "react";
import style from "./itemCount.module.css";

const ItemCount = ({ styles }: { styles: CSSProperties }) => {
  const [count, setcount] = useState<number>(0);

  const handleIncrease = () => {
    setcount((count) => count + 1);
  };
  const handleDecrease = () => {
    if (count >= 1) {
      setcount((count) => count - 1);
    }
  };
  return (
    <div className={style.ItemCount} style={styles}>
      <button onClick={handleDecrease}>-</button>
      <h3>{count}</h3>
      <button onClick={handleIncrease}>+</button>
    </div>
  );
};

export default ItemCount;
