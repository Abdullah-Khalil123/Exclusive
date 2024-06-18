"use client";
import React from "react";
import { usePathname } from "next/navigation";

const ProductItem = () => {
  const pathName = usePathname();
  const id = pathName.split("/");
  return <div>ProductItem: {id[2]}</div>;
};

export default ProductItem;
