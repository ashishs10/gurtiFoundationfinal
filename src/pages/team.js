import React from "react";
import Animated from "@/components/Animated";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Transition from "@/components/Transition";
import Program2 from "../../public/images/programs/p2.jpeg";

const FramerImage = motion(Image);

const Program = ({ type, title, summary, img }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center
    rounded-2xl border border-solid border-dark bg-light
    p-6 relative shadow-2xl
    xs:p-4"
    >
      <div
        className="absolute top-0 -right-3
              -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-2xl
              md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      />
      <Link
        href="/"
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-[2rem]"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span
          className="text-primary font-medium text-xl lg:text-lg 
        md:text-base "
        >
          {type}
        </span>
        <Link
          href="/"
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2
            className="my-2 w-full text-left text-3xl font-bold uppercase 
          lg:text-2xl sm:text-sm"
          >
            {title}
          </h2>
        </Link>

        <p className="my-2 text-dark sm:text-sm">{summary}</p>
      </div>
    </article>
  );
};

const team = () => {
  return (
    <>
      <Head>
        <title>Our Programs</title>
      </Head>
      <main>
        <Layout>
          <Transition />
          <Animated
            text="Our Team"
            className="mb-20
          lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div
            className="mb-16 flex items-center self-start mt-2
              lg:self-center "
          >
            <div className="m-auto flex">
              <Link
                href="/team"
                className="uppercase mr-10 flex items-center bg-primary text-light 
            p-2.5 px-6 rounded-lg text-lg font-semibold
            hover:bg-light hover:text-primary border
            border-solid border-transparent hover:border-primary
            md:p-2 md:px-4 md:text-base"
              >
                Pillars
              </Link>
              <Link
                href="/programs"
                className="uppercase flex items-center bg-primary text-light 
            p-2.5 px-6 rounded-lg text-lg font-semibold
            hover:bg-light hover:text-primary border
            border-solid border-transparent hover:border-primary
            md:p-2 md:px-4 md:text-base"
              >
                Mentors
              </Link>
            </div>
          </div>

          <div
            className="grid grid-cols-12 gap-24 gap-y-32
          xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0"
          >
            <div className="col-span-6 sm:col-span-12">
              <Program
                type="For young people 14 years +"
                title="EXPRESSION AMBASSADOR "
                summary="Enabling young people  to understand career avenues in the social sector and society at large. By training them to be responsible members of society.
                Building skills to work with marginalized children and learning techniques to improve mental and emotional well being.
                "
                img={Program2}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Program
                type="For young people 14 years +"
                title="EXPRESSION AMBASSADOR "
                summary="Enabling young people  to understand career avenues in the social sector and society at large. By training them to be responsible members of society.
                Building skills to work with marginalized children and learning techniques to improve mental and emotional well being.
                "
                img={Program2}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Program
                type="For young people 14 years +"
                title="EXPRESSION AMBASSADOR "
                summary="Enabling young people  to understand career avenues in the social sector and society at large. By training them to be responsible members of society.
                Building skills to work with marginalized children and learning techniques to improve mental and emotional well being.
                "
                img={Program2}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Program
                type="For young people 14 years +"
                title="EXPRESSION AMBASSADOR "
                summary="Enabling young people  to understand career avenues in the social sector and society at large. By training them to be responsible members of society.
                Building skills to work with marginalized children and learning techniques to improve mental and emotional well being.
                "
                img={Program2}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default team;
