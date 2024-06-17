import React from "react";

export const dynamicParams = true;
export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }];
}

const ProductItem: React.FC<{ params: { id: string } }> = ({ params }) => {
  return <div>ProductItem: {params.id}</div>;
};

export default ProductItem;
