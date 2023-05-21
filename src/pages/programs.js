import Animated from "@/components/Animated";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Program1 from "../../public/images/programs/p1.png";
import Program2 from "../../public/images/programs/p2.jpeg";
import Program3 from "../../public/images/programs/p3-transformed.png";
import Program4 from "../../public/images/programs/p4.png";
import { motion } from "framer-motion";
import Transition from "@/components/Transition";

const FramerImage = motion(Image);

const FeaturedProgram = ({ type, title, summary, img }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative
    rounded-3xl border border-solid border-dark bg-light
    rounded-br-2xl
    shadow-2xl p-12
    lg:flex-col lg:p08 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3
              -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-2xl
              xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
      />
      <Link
        href="/"
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-autp"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div
        className="w-1/2 flex flex-col items-start justify-between pl-6
      lg:w-full lg:pl-0 lg:pt-6"
      >
        <span className="text-primary font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href="/"
          target="blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold uppercase sm:text-sm">
            {title}
          </h2>
        </Link>

        <p className="my-2 text-dark sm:text-sm">{summary}</p>
      </div>
    </article>
  );
};

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

const programs = () => {
  return (
    <>
      <Head>
        <title>Our Programs</title>
      </Head>
      <Transition />
      <main className="w-full mb-16 flex flex-col items-center justify-center border-b-2 border-solid border-dark">
        <Layout>
          <Animated
            text="Our Programs"
            className="mb-16
          lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div
            className="grid grid-cols-12 gap-24 gap-y-32
          xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0"
          >
            <div className="col-span-12">
              <FeaturedProgram
                type="For passionate 2 to 14 year olds"
                title="Emotions Through Heart"
                summary="Helping young people to  understand their emotions, rights and self awareness. Creating an atmosphere where we discuss the importance of understanding and expressing emotions. 
                Building communication skills in english and enhancing computer skills based on child rights as per UNCRC and POCSO.
                "
                img={Program1}
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
                type="For young people over 14 years +"
                title="GURTI SCHOLAR PROGRAM "
                summary="Empowers young girls from vulnerable low income communities 
                Providing mentorship and sponsorship support.
                Building their communication and leadership skills towards effective decision making. 
                By using creative expression media they create positive social impact in society.
                
                "
                img={Program3}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProgram
                type="For young people over 14 years+"
                title="HEART2ART - CREATIVE CENTRE"
                summary="Builds leadership skills for students above 12 years. Encourages children to express themselves through creative expression to understand themselves and achieve long terms goals in life and career. 
                Builds career decisions and trajectory via mentorship and buddies support enhancing  social emotional skills based on child rights frameworks."
                img={Program4}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default programs;
