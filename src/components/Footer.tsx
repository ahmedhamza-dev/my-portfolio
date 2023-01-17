import SocialMediaIcons from "./shared/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-red pt-10 w-full">
      <div className="w-10/12 mx-auto">
        <div className="md:flex justify-center md:justify-center text-center dire">
          <SocialMediaIcons />
        </div>
        <div className="md:flex justify-center md:justify-center text-center dire">
          <p className="font-playfair font-semibold text-2xl text-yellow uppercase">
            Ahmed Hamza
          </p>
        </div>
        <div className="md:flex justify-center md:justify-center text-center dire">
          <p className="font-playfair text-md text-yellow">
            ©2023 HAMZA. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;