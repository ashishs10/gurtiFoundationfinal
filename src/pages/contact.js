import React from "react";
import Head from "next/head";
import Transition from "@/components/Transition";
import Layout from "@/components/Layout";
import Animated from "@/components/Animated";
import { TiLocation } from "react-icons/ti";
import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
const contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <Transition />
      <main
        className="w-full mb-16 flex flex-col items-center 
  justify-center overflow-hidden
  border-b-2 border-solid border-dark"
      >
        <Layout className="pb-16" />
        <Animated
          text="Get In Touch "
          className="mb-16
          lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
        />
        <div
          className="flex flex-col
        rounded-3xl border border-solid border-dark bg-light
        rounded-br-2xl
        shadow-2xl p-12
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        mb-10  
        sm:w-[70%]"
        >
          <div className="flex flex-row mb-5">
            <TiLocation size={50} />
            <h1 className="text-left text-[25px] ml-[40px] pt-2 sm:text-sm">
              DLF 1, Gurgaon, Haryana - 122002, India
            </h1>
          </div>
          <div className="flex flex-row mb-5">
            <MdEmail size={50} />
            <h1 className="text-left text-[25px] ml-[40px] pt-2 sm:text-sm">
              admin@gurtifoundation.org
            </h1>
          </div>
          <div className="flex flex-row mb-5">
            <MdCall size={50} />
            <h1 className="text-left text-[25px] ml-[40px] pt-2 sm:text-sm">
              +91-8527558772
            </h1>
          </div>
        </div>
      </main>
    </>
  );
};

export default contact;
