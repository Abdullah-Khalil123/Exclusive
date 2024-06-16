import React, { ReactNode, FC } from "react";
import style from "./center.module.css";

const Center: FC<{ child: ReactNode }> = ({ child }) => {
  return <div className={style.center}>{child}</div>;
};

export default Center;
