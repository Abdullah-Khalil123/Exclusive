import React from "react";
import style from "./login.module.css";
import Image from "next/image";
import BigButton from "@/app/Components/BigButton";
import nextConfig from "next.config.mjs";

const Login = () => {
  return (
    <div className={style.SignUpPage}>
      <div className={style.signImageHolder}>
        <Image
          alt="img"
          src={nextConfig.basePath + "/Image/phonesignup.png"}
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </div>

      <div className={style.SignupFeilds}>
        <div className={style.feilds}>
          <h3>Log in to Exclusive</h3>
          <p id={style.details}>Enter your details below</p>
          <input type="text" placeholder="Email or Phone Number" />
          <input type="text" placeholder="Password" />

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <BigButton buttonTitle="Login" styles={{ width: "140px" }} />
            <p className={style.forgot}>Forgot Password</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
