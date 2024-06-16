import React from "react";
import style from "./homepage.module.css";
import NavBar from "@/app/Components/NavBar";
import Divider from "@/app/Components/Divider";
import ProductCard from "@/app/Components/ProductCard";
import BigButton from "@/app/Components/BigButton";
import Center from "@/app/Components/Center";
import BottomNav from "@/app/Components/BottomNav";

const HomePage = () => {
  const products = Array.from([101, 201, 301, 401, 501, 601]);

  return (
    <div>
      <div className={style.homePage}>
        {products.map((item, index: number) => (
          <ProductCard key={index} productId={item} />
        ))}
      </div>
      <Center child={<BigButton buttonTitle={"View More"} />} />
    </div>
  );
};

export default HomePage;
