import React from "react";
import style from "./sectionMaker.module.css";

const SectionMaker: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className={style.SectionMaker}>
      <div className={style.Box}></div>
      <p>{text}</p>
    </div>
  );
};

export default SectionMaker;
