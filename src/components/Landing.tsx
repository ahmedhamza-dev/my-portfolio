import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
// import profileImage from "../assets/profile-image.png";
import profileImage from "../assets/my-image.jpg";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "./shared/SocialMediaIcons";

const Landing = ({ setSelectedPage }: any) => {
  const isAboveMeduimScreen = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap:16 py:10"
    >
      {/* Image Container */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMeduimScreen ? (
          <div
            className="relative z-0 pt-3 ml-20 before:absolute before:-top-20 before:-left-20 before:w-full 
            before:max-w-[500px] before:h-full before:mt-5 before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[300px] md:max-w-[500px]"
              src={profileImage}
              alt="Profile_image"
            />
          </div>
        ) : (
          <div>
            <img
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
              src={profileImage}
              alt="Profile_image"
            />
          </div>
        )}
      </div>
      {/* Main Section */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start uppercase">
            Ahmed{" "}
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush 
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
            >
              Hamza
            </span>
          </p>
          <p className="mt-10 mb-7 text-sm text-center md:text-start">
            A great passion in the field of software engineering, which made me
            learn a lot of technologies in a short time, whether web or mobile
            development. I worked on more than one business, whether it was B2B
            (ERP) or B2C (Tourism, Health, E-Commerce), and I aspire to learn
            and work more in many businesses.
          </p>
        </motion.div>

        {/*  */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 
                font-semibold hover:text-white transition duration-500 "
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div
              className="bg-deep-blue hover:text-red transition duration-500 w-full 
            h-full flex items-center justify-center font-playfair px-10"
            >
              Let's Talk
            </div>
          </AnchorLink>
        </motion.div>

        {/*  */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
