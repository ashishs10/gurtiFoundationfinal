import Animated from "@/components/Animated";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue } from "framer-motion";
import Transition from "@/components/Transition";

import blog1 from "../../public/images/heart2art/blog1.png";
import blog2 from "../../public/images/heart2art/blog2.png";
import about1 from "../../public/images/heart2art/about1.png";
import comm from "../../public/images/heart2art/comm.png";

const FramerImage = motion(Image);
const Newsletter = ({ type, title, summary, img }) => {
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
        <Link
          href="#" // read direects to the full blog
          className="flex items-center bg-dark text-light 
            p-2.5 px-6 rounded-lg text-lg font-semibold
            hover:bg-light hover:text-dark border
            border-solid border-transparent hover:border-dark"
        >
          Download
        </Link>
      </div>
    </article>
  );
};

const MovingImg = ({ title, img, link, content }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX - 200);
    y.set(5);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2
        className="capitalize text-xl font-semibold
        hover:underline"
      >
        {title}
        <FramerImage
          style={{ x: x, y: y }}
          initial={{ opacity: 0 }}
          whileInView={{ opcatiy: 1, transition: { duration: 0.2 } }}
          ref={imgRef}
          src={img}
          alt={title}
          className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden
        "
        />
      </h2>
      <h2>{content}</h2>
    </Link>
  );
};

const Blog = ({ img, title, date, content, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4
    rounded-xl flex items-center justify-between
    bg-light text-dark first:mt-0 
    border border-solid border-dark
    border-r-4 border-b-4
    sm:flex-col"
    >
      <MovingImg title={title} img={img} link={link} content={content} />
      <span
        className="text-primary font-semibold
      pl-4
      sm:self-start
      sm:pl-0 xs:text-sm"
      >
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedBlog = ({ img, title, date, summary, link }) => {
  return (
    <li
      className="relative col-span-1 w-full p-4 
    bg-light border border-solid border-dark
    rounded-2xl
    md:col-span-2"
    >
      <div
        className="absolute top-0 -right-3
              -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-2xl"
      />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt="title"
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2
          className="capitalize text-2xl font-bold my-2 mt-4 hover:underline
        xs:text-lg"
        >
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold">{date}</span>
      <div className="flex items-center self-start mt-2">
        <Link
          href="#" // read direects to the full blog
          className="flex items-center bg-dark text-light 
            p-2.5 px-6 rounded-lg text-lg font-semibold
            hover:bg-light hover:text-dark border
            border-solid border-transparent hover:border-dark"
        >
          Read
        </Link>
      </div>
    </li>
  );
};

const Heart2Art = () => {
  return (
    <>
      <Head>
        <title>Heart2Art - Blog</title>
      </Head>
      <Transition />
      <main
        className="w-full mb-16 flex flex-col items-center 
  justify-center overflow-hidden
  border-b-2 border-solid border-dark"
      >
        <Layout className="pt-16">
          <Animated
            text="Heart2Art"
            className="mb-16
          lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul
            className="grid grid-cols-2 gap-16 lg:gap-8
          md:grid-cols-1 md:gap-y-16"
          >
            <div className="col-span-2">
              <Newsletter
                type=""
                title="IN TOUCH IN TUNE || NEWSLETTER 2020-2021"
                summary="IN TOUCH IN TUNE HEART2ART BY VRITI BAJAJ NEWSLETTER OF THE YEAR OUR STORY - THROUGH THE WORDS OF VRITI BAJAJ"
                img={about1}
              />
            </div>
            <FeaturedBlog
              title="Communication plays a major role in our lives. Here’s why…."
              summary="Communication is such a common part of our everyday life that we forget about its meaning and value. We forget that good communication is.."
              date="SEP 19 2019 "
              img={comm}
              link="#"
            ></FeaturedBlog>

            <FeaturedBlog
              title="Making sense of behaviour"
              summary="Behaviour is a choice. It is simply on how you choose to behave with people around you. You may be disciplined when it comes to your..."
              date="OCT 14 2021"
              img={blog2}
              link="#"
            ></FeaturedBlog>
          </ul>
          {/* <h2
            className="font-bold text-4xl
          w-full text-center my-16 mt-32"
          >
            All Blogs
          </h2>
          <ul>
            <Blog
              title="Consistency is Key"
              content="We have all heard this from our teachers- beta agar consistently nehi padhoge to phir exams me marks nahi aayenge. And somehow teachers..."
              date="SEP 17 2021"
              link="#" // link to the particular blog
              img={blog2}
            />
            <Blog
              title="Communication plays a major role in our lives. Here’s why……."
              content=""
              date="AUG 27 2021"
              link="#" // link to the particular blog
              img={blog2}
            />
            <Blog
              title="WHO AM I?"
              content="In this modern world, it is very easy to forget what you stand for or who you are. In the race to fit in, we compromise on the things we..."
              date="JULY 09 2021"
              link="#" // link to the particular blog
              img={blog2}
            />
            <Blog
              title="Are you your own leader?"
              content="‘A leader is a person who leads or commands a group, organization, or country.’ (Oxford Dictionary) ‘One that leads or guides’ (Merriam..."
              date="JUN 10 2021"
              link="#" // link to the particular blog
              img={blog2}
            />
            <Blog
              title="Gratitude is the new Pink"
              content="Every feeling is associated with a particular colour. Yellow for joy, red for anger and PINK for GRATITUDE Everywhere around us, the news..."
              date="MAY 14 2021"
              link="#" // link to the particular blog
              img={blog2}
            />
            <Blog
              title="Because there is more to blue..."
              content="We usually use the colour to describe the emotion ‘sad’. Feeling blue as we call it. But there is more to it. Blue signifies clam,..."
              date="APR 14 2021"
              link="#" // link to the particular blog
              img={blog2}
            />
            <Blog
              title="The blueprint to hope and happiness"
              content="“Hope- makes the impossible, ‘Possible’ !” In our last blog, we explored the importance of hope in overcoming our hardships and..."
              date="FEB 18 2021"
              link="#" // link to the particular blog
              img={blog2}
            />
            <Blog
              title="Hope- makes the impossible, ‘Possible’ !"
              content="“To make something special you just have to believe it’s special.”– Mr Ping, The Kung Fu Panda With the rise in mental health problems..."
              date="FEB 05 2021"
              link="#" // link to the particular blog
              img={blog2}
            />
            <Blog
              title="HEART2ART TRUSTS THE POWER OF EMPATHY AS A VALUE ~ BUILDING A HEALTHY AND COOPERATIVE FUTURE THROUGH"
              content="The pandemic came with its fair share of challenges and impacted all of our lives in various ways, but some of these impacts came with ‘a..."
              date="JAN 22 2021"
              link="#" // link to the particular blog
              img={blog2}
            />
            <Blog
              title="TRUST THE MAGIC OF NEW BEGINNINGS FOR EFFECTIVE COMMUNICATION"
              content="Hope and it will happen! The year 2020 has been one of unique challenges and stressors for the entire world. All of us have been..."
              date="APR 14 2021"
              link="#" // link to the particular blog
              img={blog2}
            />
          </ul> */}
        </Layout>
      </main>
    </>
  );
};

export default Heart2Art;
