import React from "react";
import Image from "next/image";
import style from "./personCard.module.css";
import nextConfig from "next.config.mjs";

const PersonCard = () => {
  return (
    <div className={style.PersonCard}>
      <div className={style.PersonImageHolder}>
        <Image
          alt="Person"
          fill
          style={{ objectFit: "contain" }}
          src={nextConfig.basePath + "/Image/Frame 611.png"}
        />
      </div>
      <h4>Tom Cruise</h4>
      <p>Founder & Chairman</p>

      <section>
        <Image
          alt="social"
          src={nextConfig.basePath + "/Icons/insta.svg"}
          height={18}
          width={18}
        />
        <Image
          alt="social"
          src={nextConfig.basePath + "/Icons/linkedin.svg"}
          height={18}
          width={18}
        />
        <Image
          alt="social"
          src={nextConfig.basePath + "/Icons/twitter.svg"}
          height={18}
          width={18}
        />
      </section>
    </div>
  );
};

export default PersonCard;
