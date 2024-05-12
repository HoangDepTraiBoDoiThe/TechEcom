import Hero from "@/components/UI/hero";
import ProductList from "@/components/UI/product/productList";
import React from "react";

type Props = {};
console.log(process.env.NEXT_PUBLIC_SANITY_DATASET);
const Home = (props: Props) => {
  return (
    <div className="flex items-center justify-center">
      <div className="px-10 py-5 max-sm:px-0">
        <Hero
          smallText="Beats Solo Air"
          medText="Summer Sale"
          largeText="FINE"
          description="The Beats Solo Air is a great pair of headphones for the price. They are comfortable, sound great, and have a long battery life. The only downside is that they are not noise-cancelling."
        />
        <ProductList />
      </div>
    </div>
  );
};

export default Home;
