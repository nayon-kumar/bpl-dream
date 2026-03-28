import React from "react";
import backgorundImage from "../../../assets/BPL/bg-shadow.png";

const FooterCard = () => {
  return (
    <div className="border-2 rounded-2xl border-white p-5 container mx-auto absolute -top-50 left-1/2 -translate-x-1/2 w-[95%]">
      <div
        className="text-center bg-white bg-cover bg-center bg-no-repeat rounded-2xl h-84 flex items-center justify-center"
        style={{ backgroundImage: `url(${backgorundImage})` }}
      >
        <div className="mx-5">
          <h3 className="font-bold text-2xl">Subscribe to our Newsletter</h3>
          <p className="text-[#131313]/70 mt-4 pb-6">
            Get the latest updates and news right in your inbox!
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

export default FooterCard;
