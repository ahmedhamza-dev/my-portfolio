import GradiantLine from "./shared/GradiantLine";
import { motion } from "framer-motion";
import bkGate from "../assets/bkGate.png";
import logo2 from "../assets/logo2.png";
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ image, title, desc }: any) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  return (
    <motion.div
      variants={projectVariant}
      className="relative bg-white h-80 flex items-center"
    >
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{desc}</p>
      </div>
      <img src={image} alt={image} className="w-full" />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <GradiantLine width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10"> </p>
      </motion.div>

      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES && SMOOTH USER EXPERIENCE.
          </div>
          <Project
            image="https://www.regimcenter.com/content/6381a7b34e1c6f587b8d943181f50088.jpg"
            title="Regime Center"
            desc="Regime Centers offers you all the ways to depend on healthy lifestyles by 100% in your daily routine to relieve stress Life and increase the sense of happiness and weight loss"
          />
          <Project image="https://www.bookingcw.com/img/logo.png" title="Bookingcwa" desc="Explore the secrets of the world, connect with nature, enjoy the sense of adventure and learn about the world’s history." />

          <Project image={bkGate} title="Booking Gate" desc="" />
          <Project image={logo2} title="SASLRAS" desc="Fashion website in UAE"/>
        </motion.div>
      </div>
    </section>
  );
};  

export default Projects;
