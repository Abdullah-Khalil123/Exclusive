import React, { CSSProperties, useState } from "react";
import style from "./itemCount.module.css";

const ItemCount = ({
  styles,
  count,
  handleDecrease,
  handleIncrease,
}: {
  styles: CSSProperties;
  count: number;
  handleDecrease: () => void;
  handleIncrease: () => void;
}) => {
  return (
    <div className={style.ItemCount} style={styles}>
      <button onClick={handleDecrease}>-</button>
      <h3>{count}</h3>
      <button onClick={handleIncrease}>+</button>
    </div>
  );
};

export default ItemCount;
