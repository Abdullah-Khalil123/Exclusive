"use client";
import React from "react";
import { useParams } from "next/navigation";

const ProductItem = () => {
  const params = useParams();

  return <div>ProductItem: {params.id}</div>;
};

export default ProductItem;
