import React from "react";
import Image from "next/image";
import style from "./personCard.module.css";

const PersonCard = () => {
  return (
    <div className={style.PersonCard}>
      <div className={style.PersonImageHolder}>
        <Image
          alt="Person"
          layout="fill"
          src={"/Image/Frame 611.png"}
          objectFit="contain"
        />
      </div>
      <h4>Tom Cruise</h4>
      <p>Founder & Chairman</p>

      <section>
        <Image alt="social" src={"/Icons/insta.svg"} height={18} width={18} />
        <Image
          alt="social"
          src={"/Icons/linkedin.svg"}
          height={18}
          width={18}
        />
        <Image alt="social" src={"/Icons/twitter.svg"} height={18} width={18} />
      </section>
    </div>
  );
};

export default PersonCard;
