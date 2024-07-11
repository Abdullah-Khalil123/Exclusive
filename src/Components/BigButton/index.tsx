import React, { CSSProperties } from "react";
import style from "./bigbutton.module.css";

const BigButton: React.FC<{
  buttonTitle: string;
  styles?: CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}> = ({ buttonTitle, styles = undefined, onClick }) => {
  return (
    <button className={style.bigbutton} style={styles} onClick={onClick}>
      {buttonTitle}
    </button>
  );
};

export default BigButton;
