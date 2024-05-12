import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../card";
import Image from "next/image";
import { Button } from "../button";
import { BadgeDollarSign, Receipt, ShoppingCart } from "lucide-react";

type Props = {
  productTitle: string;
  productPrice: string;
  productImageUrl?: string;
  cardPrice?: string;
};

const ProductItem = (props: Props) => {
  return (
    <Card className="rounded-x  border-0 flex flex-col justify-center items-center overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-md">
      <CardContent className="flex flex-col justify-center items-center p-0 ">
        <Image
          className="bg-slate-200 rounded-xl"
          src={props.productImageUrl || ""}
          alt={props.productTitle}
          width={250}
          height={250}
        />
        <div className="py-2 w-full">
          <h1 className="text-base">{props.productTitle}</h1>
          <p className="font-extrabold flex text-xl items-center">
            <Receipt size={24} />
            {props.productPrice}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductItem;
