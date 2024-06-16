import React from "react";
import style from "./homepage.module.css";
import ProductCard from "@/app/Components/ProductCard";
import BigButton from "@/app/Components/BigButton";
import Center from "@/app/Components/Center";
import SectionMaker from "@/app/Components/SectionMaker";

const HomePage = () => {
  const products = Array.from([101, 201, 301, 401, 501, 601]);

  return (
    <div className={style.homepage}>
      <SectionMaker text="Today's" />

      <div className={style.products}>
        {products.map((item, index) => (
          <ProductCard productId={item} key={index} />
        ))}
      </div>
      <Center child={<BigButton buttonTitle="View All Products" />} />

      <SectionMaker text="Today's" />

      <div className={style.products}>
        {products.map((item, index) => (
          <ProductCard productId={item} key={index} />
        ))}
      </div>
      <Center child={<BigButton buttonTitle="View All Products" />} />

      <SectionMaker text="Today's" />

      <div className={style.products}>
        {products.map((item, index) => (
          <ProductCard productId={item} key={index} />
        ))}
      </div>
      <Center child={<BigButton buttonTitle="View All Products" />} />
    </div>
  );
};

export default HomePage;
