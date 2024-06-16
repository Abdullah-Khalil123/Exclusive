import React from "react";

const ProductItem: React.FC<{ params: { id: string } }> = ({ params }) => {
  return <div>ProductItem: {params.id}</div>;
};

export default ProductItem;
