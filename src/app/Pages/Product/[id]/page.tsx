// pages/Pages/Product/[id].tsx

import { GetStaticProps, GetStaticPaths } from "next";
import React from "react";
import { useRouter } from "next/router";

// Your Product component
const ProductItem: React.FC<{ product: string }> = ({ product }) => {
  const router = useRouter();
  const { id } = router.query;

  // Your component code here
  return (
    <div>
      <h1>Product {id}</h1>
      {/* render product details */}
    </div>
  );
};

export default ProductItem;

// Implement getStaticProps to fetch data for the page
export const getStaticProps: GetStaticProps = async (context) => {
  const { id }: any = context.params;

  // Fetch product data using id
  const product = await fetchProductById(id); // replace with your actual data fetching logic

  return {
    props: {
      product,
    },
  };
};

// Implement generateStaticParams to generate the paths for all products
export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch all product IDs
  const products = await fetchAllProductIds(); // replace with your actual data fetching logic

  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return {
    paths,
    fallback: false, // Set to true or 'blocking' if you want to enable incremental static generation
  };
};

// Dummy functions to simulate data fetching
async function fetchProductById(id: any) {
  // Replace with your actual logic to fetch product by ID
  return { id, name: "Product Name" };
}

async function fetchAllProductIds() {
  // Replace with your actual logic to fetch all product IDs
  return [{ id: 1 }, { id: 2 }, { id: 3 }];
}
