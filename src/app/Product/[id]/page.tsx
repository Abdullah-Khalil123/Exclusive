import React from "react";

const ProductItem = ({ params }: { params: { id: string } }) => {
  return <div>ProductItem : {params.id}</div>;
};

export default ProductItem;
