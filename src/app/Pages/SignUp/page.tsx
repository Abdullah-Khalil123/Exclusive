import React from "react";
import Image from "next/image";
import style from "./signup.module.css";
import BigButton from "@/app/Components/BigButton";

const SignUp = () => {
  return (
    <div className={style.SignUp}>
      <div className={style.SignUpImageHolder}>
        <Image
          alt="img"
          src={"/Image/phonesignup.png"}
          layout="fill"
          objectPosition="top left"
          objectFit="contain"
        />
      </div>

      <div className={style.SignUpFeilds}>
        <section>
          <h3>Create an Account</h3>
          <p>Enter your Details</p>
        </section>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email or Phone Number" />
        <input type="text" placeholder="Password" />

        <BigButton buttonTitle="Create Account" />

        <p className={style.loginAlready}>
          Already have account? <span>Log in</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
