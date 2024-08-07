"use client";
import React, { useState } from "react";
import style from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import nextConfig from "next.config.mjs";

const NavBar = () => {
  const [DropDownShow, setDropDownShow] = useState<boolean>(false);

  return (
    <div className={style.NavBar}>
      <h2>
        <Link href={"/"}>Exclusive</Link>
      </h2>

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
            src={nextConfig.basePath + "/Icons/StarFull.svg"}
            height={15}
            width={15}
          ></Image>
        </div>
        <div className={style.LikeCartHolder}>
          <Image
            alt="Heart"
            src={nextConfig.basePath + "/Icons/heart.svg"}
            width={20}
            height={20}
          />
          <Link href={"/Cart"}>
            <Image
              alt="Cart"
              src={nextConfig.basePath + "/Icons/cart.svg"}
              width={20}
              height={20}
            />
          </Link>
        </div>
      </div>

      <div className={style.mobileDropDown}>
        <Image
          alt="option"
          src={`${nextConfig.basePath}/Icons/option.svg`}
          fill
          onClick={() => {
            setDropDownShow(!DropDownShow);
          }}
        />
        <div
          className={style.dropDown}
          style={{ display: DropDownShow ? "block" : "none" }}
          onClick={() => {
            setDropDownShow(false);
          }}
        >
          <h3>
            <Link href={"/"}>Home</Link>
          </h3>
          <h3>
            <Link href={"/" + "About"}>About</Link>
          </h3>
          <h3>
            <Link href={"/"}>Contact</Link>
          </h3>
          <h3>
            <Link href={"/" + "SignUp"}>Sign Up</Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
