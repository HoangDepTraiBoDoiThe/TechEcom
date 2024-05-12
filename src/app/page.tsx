import Hero from "@/components/UI/hero";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-11/12 left-0 right-0">
        <Hero
          smallText="Beats Solo Air"
          medText="Summer Sale"
          largeText="FINE"
          description="The Beats Solo Air is a great pair of headphones for the price. They are comfortable, sound great, and have a long battery life. The only downside is that they are not noise-cancelling."
        />
      </div>
    </div>
  );
};

export default Home;
