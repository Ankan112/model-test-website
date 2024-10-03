import { AiOutlineMail } from "react-icons/ai";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 footer-bg">
      <div className="flex flex-col md:flex-row-reverse justify-between items-center main-container">
        <div className="">
          <div className="flex gap-5">
            <a
              href="https://www.facebook.com/ankan.halder.581"
              rel="noreferrer"
              target="_blank"
            >
              <div className="h-10 w-10 duration-500 cursor-pointer border-2 border-gray-500 border-solid color-main-two social hover:text-black flex justify-center items-center">
                <FaFacebookF size={20}></FaFacebookF>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/ankan-halder/"
              rel="noreferrer"
              target="_blank"
            >
              <div className="h-10 w-10 duration-500 cursor-pointer border-2 border-gray-500 border-solid color-main-two social hover:text-black flex justify-center items-center">
                <FaLinkedinIn size={20}></FaLinkedinIn>
              </div>
            </a>
            <a
              href="https://github.com/Ankan112"
              rel="noreferrer"
              target="_blank"
            >
              <div className="h-10 w-10 duration-500 cursor-pointer border-2 border-gray-500 border-solid color-main-two social hover:text-black flex justify-center items-center">
                <FaGithub size={20}></FaGithub>
              </div>
            </a>
            <a
              href="https://wa.me/+8801904727185"
              rel="noreferrer"
              target="_blank"
            >
              <div className="h-10 w-10 duration-500 cursor-pointer border-2 border-gray-500 border-solid color-main-two social hover:text-black flex justify-center items-center">
                <FaWhatsapp size={20}></FaWhatsapp>
              </div>
            </a>
            <a href="mailto:ankanhalder112@gmail.com" rel="noreferrer">
              <div className="h-10 w-10 duration-500 cursor-pointer border-2 border-gray-500 border-solid color-main-two social hover:text-black flex justify-center items-center">
                <AiOutlineMail size={20}></AiOutlineMail>
              </div>
            </a>
          </div>
        </div>
        <div>
          <p className="mt-4 md:mt-0 text-base md:text-lg color-main-two text-center">
            {currentYear} &copy; All Rights Reserved{" "}
            <span className="ah-color-primary">Admission Army.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
