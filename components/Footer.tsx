import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full pb-10 pt-20">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex md:flex-row flex-col justify-between items-center">
        <div className="flex flex-col">
          <p className="md:text-base text-sm md:font-normal font-light">
            Copyright © 2025 Patrick Steger
          </p>
          <div className="text-xs flex flex-row gap-4 text-gray-400">
            <a href="/impressum">Impressum</a>
            <a href="/datenschutz">Datenschutzerklärung</a>
          </div>
        </div>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <Link key={info.id} href={info.link} target="_blank">
              <div
                key={info.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </div>            
            </Link>
          ))}
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;