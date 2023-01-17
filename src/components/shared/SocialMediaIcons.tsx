import React from "react";
import linkedin from '../../assets/linkedin.png';
import twitter from '../../assets/twitter.png';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/ahmed-h-492388173/"
        target="_blanck"
        rel="noreferrer"
      >
        <img src={linkedin} alt="linkedin" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/ahmed.saidhamza.9"
        target="_blanck"
        rel="noreferrer"
      >
        <img src={facebook} alt="facebook" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/ahmedhamza.9/"
        target="_blanck"
        rel="noreferrer"
      >
        <img src={instagram} alt="instagram" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://twitter.com/Ahmed_hamza99?t=k7muUc9YK4b7k5K4DZx8ng&s=08"
        target="_blanck"
        rel="noreferrer"
      >
        <img src={twitter} alt="twitter" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
