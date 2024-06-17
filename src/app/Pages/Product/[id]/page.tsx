// src/app/Pages/Product/[id]/page.tsx

import React from "react";
import { notFound } from "next/navigation"; // Use notFound for handling non-existing paths

// Dummy functions to simulate data fetching
async function fetchProductById(id: string) {
  // Replace with your actual logic to fetch product by ID
  if (id === "1") return { id, name: "Product Name" }; // Example product
  return null;
}

async function fetchAllProductIds() {
  // Replace with your actual logic to fetch all product IDs
  return ["1", "2", "3"];
}

// Generate static params for the dynamic routes
export async function generateStaticParams() {
  const productIds = await fetchAllProductIds();
  return productIds.map((id) => ({ id }));
}

// Your Product component
const ProductItem: React.FC<{ params: { id: string } }> = ({ params }) => {
  const { id } = params;

  const [product, setProduct] = React.useState<{
    id: string;
    name: string;
  } | null>(null);

  React.useEffect(() => {
    async function loadData() {
      const data = await fetchProductById(id);
      if (!data) notFound();
      setProduct(data);
    }
    loadData();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>Product {product.id}</h1>
      <p>{product.name}</p>
      {/* render other product details */}
    </div>
  );
};

export default ProductItem;
