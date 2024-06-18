"use client";
import React from "react";
import { useParams } from "next/navigation";

const ProductItem = () => {
  const { id } = useParams();

  return <div>ProductItem: {id}</div>;
};

export default ProductItem;
