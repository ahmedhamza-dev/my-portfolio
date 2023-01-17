import LineGradient from "./shared/GradiantLine";
import { motion } from "framer-motion";
import GradiantLine from '../assets/contact-image.jpeg';
import emailjs from 'emailjs-com';
import { useRef, useState } from "react";

const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  const form = useRef<any>();

  const onSubmit = async (e:any) => {
    const ServiveId = "service_w3d5nn4";
    const TempId = "template_mioy8mn";
    const publicKey = "JU2GbYpPxgsHKy8qT"
    e.preventDefault();
    setIsSent(true);
    emailjs.sendForm(ServiveId, TempId, form.current, publicKey).then((result) => {
        setIsSent(false);
    }, (error) => {
      console.log(error)
    });
  };

  return (
    <section id="contact" className="contact py-48">
      {/* HEADINGS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex justify-end w-full"
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-yellow">CONTACT ME</span> TO GET STARTED
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>

      {/* FORM & IMAGE */}
      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 flex justify-center"
        >
          <img src={GradiantLine} alt="contact" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 mt-10 md:mt-0"
        >
          <form
            ref={form}
            onSubmit={onSubmit}
          >
            <input
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3"
              type="text"
              placeholder="NAME"
              name="user_name"
              required
            />

            <input
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="EMAIL"
              name="user_email"
              required
            />

            <textarea
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
              placeholder="MESSAGE"
              rows={4}
              cols={50}
              name="user_message"
              required
            />
            {isSent && (
              <p className="text-red mt-1">
                Thanks For messaging!
              </p>
            )}

            <button
              className="p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500"
              type="submit"
            >
              SEND ME A MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;