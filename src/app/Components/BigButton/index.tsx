import React from "react";
import style from "./bigbutton.module.css";

const BigButton: React.FC<{ buttonTitle: string; styles?: any }> = ({
  buttonTitle,
  styles = null,
}) => {
  return (
    <button className={style.bigbutton} style={styles}>
      {buttonTitle}
    </button>
  );
};

export default BigButton;
