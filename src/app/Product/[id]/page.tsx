// pages/Product/[id].tsx

import { GetServerSideProps } from "next";
import React from "react";

const ProductItem: React.FC<{ id: string; product: any }> = ({
  id,
  product,
}) => {
  return (
    <div>
      <h1>Product ID: {id}</h1>
      <p>Product Name: {product?.name}</p>
      <p>Product Description: {product?.description}</p>
      {/* Render other product details */}
    </div>
  );
};

export default ProductItem;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id }: any = params;

  // Fetch data for the specific product ID
  const response = await fetch(`https://api.example.com/products/${id}`);
  const product = await response.json();

  return {
    props: {
      id,
      product,
    },
  };
};
