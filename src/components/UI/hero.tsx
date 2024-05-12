import Image from "next/image";
import React from "react";

type Props = {
  smallText?: string;
  medText?: string;
  largeText?: string;
  description?: string;
};

const Hero = (props: Props) => {
  return (
    <section className="flex flex-col justify-between relative bg-slate-200 max-md:p-5 p-10 rounded-2xl h-[700px] max-md:h-[850px]">
      <div className="space-y-0 gap-0">
        <p className="font-semibold text-2xl">{props.smallText}</p>
        <h2 className="font-bold text-red-500 text-7xl">{props.medText}</h2>
        <h1 className="text-white font-bold text-9xl">{props.largeText}</h1>
        <Image
          className="absolute max-md:top-60 top-5 right-1/2 left-1/2 -translate-x-1/2"
          src={"/assets/headphones_a_3.webp"}
          width={550}
          height={550}
          alt="hero"
        />
      </div>
      <div className="text-right">
        <p className="font-bold">Description:</p>
        <p className="text-base text-gray-500 text-balance">
          {props.description}
        </p>
      </div>
    </section>
  );
};

export default Hero;
