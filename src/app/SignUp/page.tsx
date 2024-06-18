import React from "react";
import style from "./signup.module.css";
import Image from "next/image";
import BigButton from "@/Components/BigButton";
import Link from "next/link";
import nextConfig from "next.config.mjs";

const SignUp = () => {
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
          <h3>Create an account</h3>
          <p id={style.details}>Enter your details below</p>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email or Phone Number" />
          <input type="text" placeholder="Password" />

          <BigButton buttonTitle="Create Account" styles={{ width: "100%" }} />

          <p className={style.already}>
            Already have an account.&nbsp;&nbsp;&nbsp;
            <span>
              <Link
                href={"/" + "Login"}
                style={{ textDecoration: "none", color: "black" }}
              >
                Log in
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
