import {
  FaFacebookF,
  FaTelegram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer
        className="bg-secondary text-gray-700 footer"
      >
        {/* Container */}
        <div className="max-w-7xl mx-auto px-6 py-10">
          {/* Top section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Contact Info */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-900">Contact Info</h2>
              <p className="text-xl mt-2">Email: ishtiaqueht@gmail.com</p>
              <p className="text-xl">Phone: +880 1787 12 7080</p>
            </div>

            {/* Terms & Privacy */}
            <div className="flex gap-4 text-sm">
              <a href="#" className="hover:text-green transition">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-green transition">
                Privacy Policy
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 text-3xl">
              <a
                href="https://www.facebook.com/ishtiaque.hossaintanbin.1"
                className="p-2 rounded-full bg-base-content hover:bg-blue-600 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://t.me/Ishtiaque_HT"
                className="p-2 rounded-full bg-base-content hover:bg-sky-400 transition"
              >
                <FaTelegram />
              </a>
              <a
                href="https://github.com/"
                className="p-2 rounded-full bg-base-content hover:bg-gray-700 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/ishtiaqueht/"
                className="p-2 rounded-full bg-base-content hover:bg-blue-500 transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-6"></div>

          {/* Bottom text */}
          <div className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} TreeHub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
