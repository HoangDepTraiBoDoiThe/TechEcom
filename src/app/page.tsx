import Hero from "@/components/UI/hero";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-11/12 left-0 right-0">
        <Hero />
      </div>
    </div>
  );
};

export default Home;
