import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import Image from "next/image";

import iimb from "../../public/images/profile/iimb.png";

const Footer = () => {
  return (
    <footer className="w-full  ">
      <Layout
        className="py-8 flex items-center justify-between
      "
      >
        <span></span>

        <div className="text-center flex flex-col items-center">
          <Link href="" className="text-center text-2xl">
            Gurti Foundation
          </Link>
          <p className="text-center text-xs">pre-incubated by</p>
          <Image
            src={iimb}
            alt="iim-bengaluru"
            className="w-[30%] h-auto py-2"
          />
        </div>
        <span></span>
      </Layout>
    </footer>
  );
};

export default Footer;
