import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import ProPic from "../../public/images/profile/picture1.png";
import Animated from "@/components/Animated";
import Link from "next/link";
import Transition from "@/components/Transition";

import About from "./about";
import Programs from "./programs";
import Heart2Art from "./Heart2Art";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gurti Foundation</title>
      </Head>
      <Transition />
      <main className=" flex items-center text-dark w-full min-h-screen ">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col ">
            <div
              className="w-1/2 flex flex-col self-center 
            lg:w-full
            lg:text-center lg:order-2"
            >
              {/* <h1>Gurti Foundation</h1> */}
              <Animated
                text="Gurti Foundation"
                className="uppercase !text-6xl !text-left xl:text-5xl 
                lg:!text-center lg:!text-6xl md:!text-5xl
                sm:!text-3xl"
              />
              <p className="my-4 text-4xl lg:text-4xl sm:text-2xl sm:my-1">
                where dreams come true
              </p>

              <div
                className="flex items-center self-start mt-2 
              lg:self-center "
              >
                <Link
                  href="/programs"
                  className="flex items-center bg-primary text-light 
            p-2.5 px-6 rounded-lg text-lg font-semibold
            hover:bg-light hover:text-primary border
            border-solid border-transparent hover:border-primary
            md:p-2 md:px-4 md:text-base"
                >
                  Explore
                </Link>
                <Link
                  href="/GurtiReport.pdf"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize
                
                flex items-center bg-dark text-light 
            p-2.5 px-6 rounded-lg text-lg font-semibold
            hover:bg-light hover:text-primary border
            border-solid border-transparent hover:border-primary
            md:p-2 md:px-4 md:text-base"
                >
                  Our Year Review
                </Link>
              </div>
            </div>
            <div className="w-1/2 md:w-full md:order-1 lg:order-1">
              <Image
                src={ProPic}
                alt=""
                className="w-full h-auto lg:hidden 
              md:inline-block md:w-full sm:mt-0"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
