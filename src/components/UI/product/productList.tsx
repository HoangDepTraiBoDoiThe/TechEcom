import { sanityFetch } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import React from "react";
import ProductItem from "./productItem";

type Props = {};

const ProductList = async (props: Props) => {
  const products = await sanityFetch({ query: `*[_type == "product"]` });

  return (
    <section className="">
      <h1 className="font-bold text-4xl text-center p-10">Product list</h1>
      <div className="flex flex-wrap gap-5 justify-center">
        {products.map((product: any) => (
          <ProductItem
            key={product._id}
            productTitle={product?.name}
            productPrice={product?.price}
            productImageUrl={urlForImage(product?.image)}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
