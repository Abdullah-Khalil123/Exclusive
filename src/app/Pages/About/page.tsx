import Divider from "@/app/Components/Divider";
import NavBar from "@/app/Components/NavBar";
import React from "react";
import Image from "next/image";
import style from "./about.module.css";
import BottomNav from "@/app/Components/BottomNav";
import AboutReportCard from "@/app/Components/AboutReportCard";
import PersonCard from "@/app/Components/PersonCard";
import nextConfig from "next.config.mjs";

const About = () => {
  return (
    <div>
      <div className={style.about}>
        <p>
          Home / <span>About</span>
        </p>

        <div className={style.StoryImageHolder}>
          <div className={style.aboutOurStory}>
            <h1>Our Story</h1>
            <p>
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <div className={style.imageHolder}>
            <Image
              alt={"image"}
              objectFit="cover"
              objectPosition="top"
              layout="fill"
              src={nextConfig.basePath + "/Icons/aboutimg.png"}
            ></Image>
          </div>
        </div>
      </div>

      <div className={style.ReportCards}>
        <AboutReportCard />
        <AboutReportCard />
        <AboutReportCard />
        <AboutReportCard />
      </div>

      <div className={style.Persons}>
        <PersonCard />
        <PersonCard />
        <PersonCard />
      </div>
    </div>
  );
};

export default About;
