// pages/Product/[id].tsx

import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";

const ProductItem: React.FC<{ id: string }> = ({ id }) => {
  return <div>ProductItem: {id}</div>;
};

export default ProductItem;

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch the list of product IDs from an API or any data source
  const productIds = ["1", "2", "3"]; // Update with your actual product IDs

  // Generate paths with the list of product IDs
  const paths = productIds.map((id) => ({
    params: { id },
  }));

  return {
    paths,
    fallback: false, // Set to false if you want to render 404 for unknown IDs
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;

  // Fetch data for the specific product ID
  // Example: Fetch product details from an API based on id
  // Replace this with your actual data fetching logic
  const productData = {
    id,
    // other product details
  };

  return {
    props: {
      id,
      // Pass other product details as needed
    },
  };
};
