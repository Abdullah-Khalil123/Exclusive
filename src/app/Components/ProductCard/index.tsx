"use client";
import React from "react";
import style from "./productCard.module.css";
import Image from "next/image";
import img from "@public/Image/Frame 611.png";
import star from "@public/Icons/StarFull.svg";

interface ProductCardInterface {
  productId: number;
}

const ProductCard: React.FC<ProductCardInterface> = ({ productId }) => {
  const temp = productId;
  const title = "HAVIT HV-G92 Gamepad";
  const discount = 40;
  const oldPrice = 160;
  const newPrice = 120;
  const totalratings = 88;

  const ratingStarCount = Array.from({ length: 5 });

  return (
    <div className={style.ProductCard}>
      <div className={style.CardImageHolder}>
        <Image
          alt="Product Image"
          src={img}
          layout="fill"
          objectFit="contain"
          sizes="small"
        ></Image>
        <div className={style.discount}>
          <p>-{discount} %</p>
        </div>
      </div>
      <h3 className={style.CardTitle}>{title}</h3>
      <div className={style.prices}>
        <h4 className={style.new}>${newPrice}</h4>
        <h4 className={style.old}>${oldPrice}</h4>
      </div>
      <div className={style.ratingHolder}>
        <div className={style.ratings}>
          {ratingStarCount.map((_, index) => (
            <Image alt="star" width={20} height={20} src={star} />
          ))}
        </div>
        <h4>{`(${totalratings})`}</h4>
      </div>
    </div>
  );
};

export default ProductCard;
