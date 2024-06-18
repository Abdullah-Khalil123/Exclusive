import React from "react";

const ProductItem = ({ params }: { params: { id: string } }) => {
  return <div>ProductItem : {params.id}</div>;
};
export async function generateStaticParams() {
  const products = [{ id: "1" }, { id: "2" }, { id: "3" }];

  return products.map((product) => ({
    params: {
      id: product.id,
    },
  }));
}

export default ProductItem;
