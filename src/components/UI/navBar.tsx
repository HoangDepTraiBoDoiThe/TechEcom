import { ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./button";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav className="flex justify-between p-3 shadow-md">
      <div className="flex items-center gap-2">
        <Image src="/logo_bigger.jpeg" alt="Logo" width={60} height={60} />
        <h1 className="font-bold text-xl">Tech Ecom</h1>
      </div>
      <div className="flex justify-between items-center gap-10">
        <Button>
          <ShoppingCart />
        </Button>
        <Link href={"/user/profile"}>
          <User
            className="hover:text-red-500 transition-colors duration-300"
            size={30}
          />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
