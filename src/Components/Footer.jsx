import React from "react";
import ThemeToggle from "./ThemeToggle";
import { AiOutlineInstagram } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="rounded-div mt-8 pt-8 text-primary">
      <div className="grid md:grid-cols-2">
        <div className="flex justify-evenly w-full md:max-w-[300px] uppercase">
          <div>
            <h2 className="font-bold">Support</h2>
            <ul>
              <li className="text-sm py-2">Help Center</li>
              <li className="text-sm py-2">Contact Us</li>
              <li className="text-sm py-2">API Status</li>
              <li className="text-sm py-2">Documentation</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">Info</h2>
            <ul>
              <li className="text-sm py-2">About US</li>
              <li className="text-sm py-2">Careers</li>
              <li className="text-sm py-2">Invest</li>
              <li className="text-sm py-2">Legal</li>
            </ul>
          </div>
        </div>
        <div className="text-right">
          <div className="w-full flex justify-end">
            <div className="w-full md:w-[300px] py-4 relative">
              <div className="flex justify-center md:justify-end py-4 md:py-0 md:pb-4 mt-[-1rem]">
                <ThemeToggle />
              </div>
              <p className="text-center md:text-right">
                Subscribe for crypto news
              </p>
              <div className="py-4">
                <form>
                  <input
                    className="bg-primary border border-input p-2 mr-2 w-full shadow-xl rounded-2xl md:w-auto"
                    type="email"
                    placeholder="Enter your email."
                  />
                  <button className="bg-button text-btnText px-4 p-2 w-full rounded-2xl shadow-xl hover:shadow-2xl md:w-auto my-2">
                    Subscribe
                  </button>
                </form>
              </div>
              <div className="flex py-4 justify-end text-accent">
                <AiOutlineInstagram className="mx-2" />
                <FaFacebook className="mx-2" />
                <FaTwitter className="mx-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <p className="text-center">Powered by Coin Gecko</p>
        <p className="text-center mr-4">Emre Doğramacı</p>
      </div>
      <div className="flex justify-center items-center mb-4 text-accent">
        <a href="https://github.com/emredogramaci">
          <FaGithub className="mr-4 text-xl" />
        </a>
        <a href="https://www.emredogramaci.com.tr/">
          <CgWebsite className="text-xl" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
