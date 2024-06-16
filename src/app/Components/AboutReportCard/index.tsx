import React from "react";
import style from "./aboutreport.module.css";

const AboutReportCard = () => {
  return (
    <div className={style.AboutReportCard}>
      <div className={style.circleOuter}>
        <div className={style.circleInner}></div>
      </div>
      <h1>10.5K</h1>
      <p>Sellers active on our site</p>
    </div>
  );
};

export default AboutReportCard;
