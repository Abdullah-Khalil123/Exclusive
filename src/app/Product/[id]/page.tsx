"use client";
import React from "react";
import { usePathname } from "next/navigation";

const ProductItem = ({ posts }: { posts: any }) => {
  const pathName = usePathname();
  const id = pathName.split("/");
  return <div>ProductItem: {id[2]}</div>;
};

export async function getStaticParams() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    params: {
      posts,
    },
  };
}

export default ProductItem;
