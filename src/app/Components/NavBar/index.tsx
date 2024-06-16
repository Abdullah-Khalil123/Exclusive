import React from "react";
import style from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import About from "@/app/Pages/About/page";

const NavBar = () => {
  return (
    <div className={style.NavBar}>
      <h2>Exclusive</h2>

      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>Contact</li>
        <li>
          <Link href={"/" + "About"}>About</Link>
        </li>
        <li>
          <Link href={"/" + "SignUp"}>Sign Up</Link>
        </li>
      </ul>

      <div className={style.InputIconHolder}>
        <div className={style.InputHolder}>
          <input type="text" placeholder="What are you looking for?" />
          <Image
            alt=""
            src={"/Icons/StarFull.svg"}
            height={15}
            width={15}
          ></Image>
        </div>
        <div className={style.LikeCartHolder}>
          <Image alt="Heart" src={"/Icons/heart.svg"} width={20} height={20} />
          <Image alt="Heart" src={"/Icons/cart.svg"} width={20} height={20} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
