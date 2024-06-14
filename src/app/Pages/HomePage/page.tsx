import React from "react";
import style from "./homepage.module.css";
import HomePageNavBar from "@/app/Components/HomePageNavBar";
import Divider from "@/app/Components/Divider";
import ProductCard from "@/app/Components/ProductCard";

const HomePage = () => {
  return (
    <div>
      <HomePageNavBar />
      <Divider />
      <div className={style.homePage}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default HomePage;
