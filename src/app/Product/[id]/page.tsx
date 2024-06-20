import React from "react";
import style from "./productPage.module.css";
import Image from "next/image";
import nextConfig from "next.config.mjs";
import BigButton from "@/Components/BigButton";
import ItemCount from "@/Components/ItemCount";

const ProductPage = ({ params }: { params: { id: string } }) => {
  return (
    <div className={style.ProductPage}>
      <div className={style.ProductPageImageHolder}>
        <div className={style.smallHolder}>
          <SmallProductImage />
          <SmallProductImage />
          <SmallProductImage />
          <SmallProductImage />
        </div>
        <div className={style.bigProductImage}>
          <Image
            alt="img"
            src={`${nextConfig.basePath}/Image/Frame 611.png`}
            fill
            objectFit="contain"
          />
        </div>
      </div>

      <section className={style.ProductInfo}>
        <h2>{params.id}</h2>
        <h4>$192.00</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          deserunt atque quod unde labore ullam et veniam iusto cum nostrum
          quisquam culpa? Sapiente aliquid est fuga voluptate, autem nisi
          inventore?
        </p>
        <div className={style.line}></div>
        <p>Colors: </p>
        <p>Size: </p>

        <div className={style.countBuy}>
          <ItemCount styles={{ height: "100%" }} />
          <BigButton
            buttonTitle="Buy Now"
            styles={{ height: "100%", padding: "0px 40px" }}
          />
        </div>

        <section className={style.diliveryType}>
          <div className={style.FreeDilivery}>
            <div className={style.iconDiv}>
              <Image
                alt="icon"
                fill
                src={`${nextConfig.basePath}/Icons/truck.svg`}
              />
            </div>
            <div className={style.divText}>
              <h3>Free Delivery</h3>
              <p>Enter your postal code for Delivery Availability</p>
            </div>
          </div>
          <div className={style.FreeDilivery}>
            <div className={style.iconDiv}>
              <Image
                alt="icon"
                fill
                src={`${nextConfig.basePath}/Icons/icon-return.svg`}
              />
            </div>
            <div className={style.divText}>
              <h3>Return Delivery</h3>
              <p>Free 30 Days Delivery Returns. Details</p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

const SmallProductImage = () => {
  return (
    <div className={style.smallImageHolder}>
      <Image
        src={`${nextConfig.basePath}/Image/Frame 611.png`}
        alt={""}
        fill
        objectFit="contain"
      />
    </div>
  );
};

export default ProductPage;
