import React from "react";
import style from "./navbar.module.css";
import Image from "next/image";

const TopNavBar = () => {
  return (
    <div className={style.NavBar}>
      <h2>Exclusive</h2>

      <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
        <li>Sign Up</li>
      </ul>

      <div className={style.InputIconHolder}>
        <div className={style.InputHolder}>
          <input type="text" placeholder="What are you looking for?" />
          <Image
            alt=""
            src={"Icons/StarFull.svg"}
            height={15}
            width={15}
          ></Image>
        </div>
        <div className={style.LikeCartHolder}>
          <Image alt="Heart" src={"Icons/heart.svg"} width={20} height={20} />
          <Image alt="Heart" src={"Icons/cart.svg"} width={20} height={20} />
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
