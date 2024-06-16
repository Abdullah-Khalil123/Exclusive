import React from "react";
import style from "./bigbutton.module.css";

const BigButton: React.FC<{ buttonTitle: string }> = ({ buttonTitle }) => {
  return <button className={style.bigbutton}>{buttonTitle}</button>;
};

export default BigButton;
