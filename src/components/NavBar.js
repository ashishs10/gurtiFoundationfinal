import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import profilePicture from "../../public/images/logo.png";
import { useState } from "react";

//import icons
import {
  InstagramIcon,
  WhatsAppIcon,
  LinkedInIcon,
  FacebookIcon,
} from "./Icons";

//navbar links
const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      className={`${className} 
    relative group uppercase`}
    >
      {title}

      <span
        className={`h-[1px] inline-block
        bg-primary absolute left-0 -bottom-0.5
        group-hover:w-full 
        transition-[width] ease durartion-300
        ${router.asPath === href ? "w-full" : "w-0"}
        `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

// mobile links
const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} 
    relative group uppercase text-light my-1`}
      onClick={handleClick}
    >
      {title}

      <span
        className={`h-[1px] inline-block
        bg-light absolute left-0 -bottom-0.5
        group-hover:w-full 
        transition-[width] ease durartion-300
        ${router.asPath === href ? "w-full" : "w-0"}
        `}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header
      className="w-full
  px-36 py-6 font-medium
  flex items-center justify-between relative
  z-10 lg:px-12 sm:px-8"
    >
      {/* logo */}
      <div>
        <Image
          src={profilePicture}
          href="/"
          alt="logo"
          className="w-full h-auto"
        />
      </div>
      {/* navlinks */}
      <nav className="xl:hidden">
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/programs" title="Programs" className="mx-4" />
        <CustomLink href="/team" title="Team" className="mx-4" />
        <CustomLink href="/Heart2Art" title="Heart2Art" className="mx-4" />
        <CustomLink href="/contact" title="Contact" className="ml-4" />
      </nav>
      {/* social links */}
      <nav className="flex items-start flex-wrap justify-between lg:hidden">
        <motion.a
          href="https://www.instagram.com/gurti_foundation"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className=" mx-3"
        >
          <InstagramIcon />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/company/gurtifoundation/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className=" mx-3"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://www.facebook.com/Gurtifoundation/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className=" mx-3"
        >
          <FacebookIcon />
        </motion.a>
        <motion.a
          href="https://api.whatsapp.com/send/?phone=918527558772&text&type=phone_number&app_absent=0"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="mx-3"
        >
          <WhatsAppIcon />
        </motion.a>
      </nav>

      {/* mobile menu */}
      {isOpen ? (
        <div
          className="min-w-[70vw] flex flex-col justify-between items-center
      fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      z-30 bg-dark/90 rounded-lg background-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center ">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/programs"
              title="Programs"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/team"
              title="Team"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/Heart2Art"
              title="Heart2Art"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/contact"
              title="Contact"
              className=""
              toggle={handleClick}
            />
          </nav>
          {/* social links */}
          <nav
            className="flex items-start flex-wrap justify-between
      "
          >
            <motion.a
              href="https://www.instagram.com/gurti_foundation"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className=" mx-3"
            >
              <InstagramIcon />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/company/gurtifoundation"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className=" mx-3"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/Gurtifoundation"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className=" mx-3"
            >
              <FacebookIcon />
            </motion.a>
            <motion.a
              href="https://api.whatsapp.com/send/?phone=918527558772&text&type=phone_number&app_absent=0"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="mx-3"
            >
              <WhatsAppIcon />
            </motion.a>
          </nav>
        </div>
      ) : null}

      {/* hamburger menu */}
      <button
        className="flex flex-col justify-center items-center hidden lg:flex "
        onClick={handleClick}
      >
        <span
          className={`bg-dark block h-0.5 w-6 transition-all duration-300 ease-out rounded-sm -translate-y-0.5 ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark block h-0.5 w-6 transition-all duration-300 ease-out rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark block h-0.5 w-6 transition-all duration-300 ease-out rounded-sm translate-y-0.5 ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
    </header>
  );
};

export default NavBar;
