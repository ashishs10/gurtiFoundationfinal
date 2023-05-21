import React from "react";
import Animated from "@/components/Animated";
import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import aboutVisionPicture from "../../public/images/profile/about1.png";
import aboutVisionPicture2 from "../../public/images/profile/about2.png";
import Transition from "@/components/Transition";

const about = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <Transition />
      <main
        className="flex w-full flex-col items-center justify-center
       border-b-2 border-solid border-dark "
      >
        <Layout className="pt-16">
          <Animated
            text="About Us"
            className="mb-16 lg:!text-7xl 
          sm:!text-6xl xs:!text-4xl
          sm:mb-8"
          />
          <div className="grid w-full grid-cols-6 gap-16 sm:gap-8">
            <div
              className="col-span-3 flex-col items-start justify-start
            xl:col-span-4 md:order-2
            md:col-span-6"
            >
              <h2
                className="mb-4 text-lg font-bold 
              uppercase text-dark/75 xl:text-center md:text-lg 
              sm:text-base sm:text-sm"
              >
                Vision and Mission
              </h2>
              <h3>
                <strong>
                  Creating a world where everyone is a leader where they are
                  able to express creatively and freely!
                </strong>
              </h3>
              <p className="my-4">
                Our organization builds conducive learning safe spaces for young
                people where they can express themselves through creative
                expression media like art, dance, songs etc.<br></br>
              </p>
              <p className="my-4">
                We empower vulnerable young people from marginalized backgrounds
                and build their capacity to become accomplished members of
                society.
              </p>
              <p>
                Our customized interventions are based on the guidelines of the
                united nations convention on the rights of child (UNCRC) and
                POCSO (protection of children from sexual offences) and provide
                specialized services to schools, corporates, NGOs and
                caregivers.
              </p>
            </div>

            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid
            border-dark
            bg-light p-8
            md:order-1
            md:col-span-6"
            >
              <div
                className="absolute top-0 -right-3
              -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark"
              />
              <Image
                src={aboutVisionPicture}
                alt="gurti-foundation"
                className="w-full h-[400px] rounded-2xl"
              />
            </div>
          </div>

          <div className="grid w-full grid-cols-6 gap-16 mt-24">
            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid
            border-dark
            bg-light p-8
            md:order-1
            md:col-span-6"
            >
              <div
                className="absolute top-0 -right-3
              -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark"
              />
              <Image
                src={aboutVisionPicture2}
                alt="gurti-foundation"
                className="w-full h-[400px] rounded-2xl"
              />
            </div>
            <div
              className="col-span-3 flex-col items-start justify-start md:order-2
            md:col-span-6"
            >
              <h2
                className="mb-4 text-lg font-bold 
              uppercase text-dark/75 xl:text-center md:text-lg 
              sm:text-base sm:text-sm"
              >
                Values
              </h2>

              <p className="my-4">
                We emphasize the understanding of one self to create a purpose
                oriented social impact.
              </p>
              <p className="my-4">
                We create leaders of tomorrow who believe in themselves, have a
                clear vision and can enable others to grow as well.
              </p>
              <p className="my-4">
                One of our main aims are to empower young people building
                communication skills so they can effectively make decisions.
              </p>
              <p>
                We inculcate patience and consistency as core values in all our
                young adults since it enables them to have a positive sense of
                self empowerment{" "}
              </p>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default about;
