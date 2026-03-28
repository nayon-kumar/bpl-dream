import React from "react";
import logo from "../../../assets/BPL/logo-footer.png";

const FooterLinks = () => {
  return (
    <div className="pt-60 container mx-auto">
      <div className="text-center">
        <img className="mx-auto" src={logo} alt="Logo" />
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center text-center sm:text-left px-3">
        <div>
          <h4 className="text-white font-bold mb-4 mt-4 sm:mt-0">About Us</h4>
          <p className="text-white/60">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 mt-4 sm:mt-0">
            Quick Links
          </h4>
          <ul className="text-white/60 sm:list-disc sm:pl-5">
            <li className="cursor-pointer hover:text-white">Home</li>
            <li className="cursor-pointer hover:text-white">Services</li>
            <li className="cursor-pointer hover:text-white">About</li>
            <li className="cursor-pointer hover:text-white">Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 mt-4 sm:mt-0">Subscribe</h4>
          <p className="text-white/60 mb-4">
            Subscribe to our newsletter for the latest updates.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
            <input
              className="input"
              type="email"
              placeholder="Enter your email"
            />
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
