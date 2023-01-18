import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import GradiantLine from "./shared/GradiantLine";
import skills from "../assets/skills-image.png";

const MySkills = () => {
  const isAboveMeduimScreen = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="experience" className="pt-10 pb-24">
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red uppercase">Experience</span>
          </p>
          <GradiantLine width="w-1/3" />
          <p className="mt-10 mb-7">
            I stared my career with UAE startup called{" "}
            <span className="text-red">Googrow</span> since 2020, there I earned
            a lot of experience and I built web application with Angular and
            React, Building Mobile Application with React Native.After my
            graduation, I decided to go to the companies in the Egyptian market,
            and they are as follows.
          </p>
        </motion.div>
        <div className="mt-16 md:mt-0">
          {isAboveMeduimScreen ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 
                 before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img className=" z-10" src={skills} alt="Profile_image" />
            </div>
          ) : (
            <img className=" z-10" src={skills} alt="Profile_image" />
          )}
        </div>
      </div>
      {/* Skills */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative">
            <div className="z-10">
              <div
                className="w-full md:justify-center md:flex md:w-full h-44 right-0 top-0 z-[-1]"
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundImage: `url("https://media.licdn.com/dms/image/C4E0BAQF_h1jujb-O_g/company-logo_200_200/0/1532877679209?e=1681948800&v=beta&t=lzDD3zrG4x1nvOzAe80yS8dzfr0tcFqMfqInQRc5POY")`,
                }}
              />
              <p className="font-playfair font-semibold text-2xl mt-3">
                T TECH For Security and Software Solutions
              </p>
            </div>
            <p className="mt-5 bg-red">Jul 2021 - Dec 2021 · 6 mos</p>
            <p className="mt-1">
              Develop full responsive ERP Web Application with Angular.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative">
            <div className="z-10">
              <div
                className="w-full md:w-full h-44 right-0 top-0 z-[-1]"
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundImage: `url("https://media.licdn.com/dms/image/C4D0BAQHvQtgOTwdZaQ/company-logo_200_200/0/1660557277020?e=1681948800&v=beta&t=orSqACO-A3W4u540JYRdCXrFKqRTMqgfpo-J4IovZXE")`,
                }}
              />
              <p className="font-playfair font-semibold text-2xl mt-3">
                Data Management Systems (DMS)
              </p>
            </div>
            <p className="mt-5 bg-red">Dec 2021 - Jul 2022 · 8 mos</p>
            <p className="mt-1">
              Giving frontend solutions and upgrading Angular version for legacy
              web apps, Increase performance with using types, clean code,
              change project structure with lazy loading modules and SSR
            </p>
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative">
            <div className="z-10">
              <div
                className="w-full md:w-full h-44 right-0 top-0 z-[-1]"
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundImage: `url("https://media.licdn.com/dms/image/C4D0BAQFyVv7iyWtQuw/company-logo_200_200/0/1634135564245?e=1681948800&v=beta&t=pLpAAIm2nmUd8SHuMvREEy6eWjvgtN4LjOrJPpwXSiw")`,
                }}
              />
              <p className="font-playfair font-semibold text-2xl mt-3">
                _VOIS (Vodafone Intelligent Solutions)
              </p>
            </div>
            <p className="mt-5 bg-red">Jul 2022 - Present · 7 mos</p>
            <p className="mt-1">
              Building mobile apps with React native, Modern wep apps with
              React, Delivering Business around the corporate.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
