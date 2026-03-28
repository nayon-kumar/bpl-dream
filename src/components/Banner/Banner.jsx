import React, { useState } from "react";
import bannerImage from "../../assets/BPL/banner-main.png";
import backgorundImage from "../../assets/BPL/bg-shadow.png";
import { toast } from "react-toastify";

const Banner = ({ price, setPrice }) => {
  const [isClimed, setIsClimed] = useState(false);
  const handleClick = () => {
    if (isClimed) {
      toast.error("Offer is already climed!");
      return;
    }
    toast.success("Offer climed successfully!");
    setIsClimed(true);
    setPrice(price + 20);
  };

  return (
    <div className="px-3 pt-25">
      <div
        style={{ backgroundImage: `url(${backgorundImage})` }}
        className="bg-cover bg-center bg-no-repeat rounded-2xl bg-[#131313] container mx-auto text-center h-135 flex items-center justify-center px-5"
      >
        <div>
          <img className="mx-auto" src={bannerImage} alt="Banner" />
          <h2 className="text-[#FFFFFF] mt-6 mb-4 font-bold text-2xl sm:text-3xl md:text-4xl">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h2>
          <p className="text-[#FFFFFF]/70 mb-6">
            Beyond Boundaries Beyond Limits
          </p>
          <div className="border-2 inline px-1 rounded-xl py-5 border-[#E7FE29] cursor-pointer">
            <button
              onClick={() => handleClick()}
              className="bg-[#E7FE29] text-[#131313 px-5 py-3.5 rounded-xl font-bold cursor-pointer"
            >
              Claim Free Credit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
