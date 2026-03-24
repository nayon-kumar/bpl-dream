import React from "react";
import bannerImage from "../../assets/BPL/banner-main.png";
import backgorundImage from "../../assets/BPL/bg-shadow.png";

const Banner = () => {
  return (
    <div className="mt-6">
      <div
        style={{ backgroundImage: `url(${backgorundImage})` }}
        className="bg-cover bg-center bg-no-repeat rounded-2xl bg-[#131313] container mx-auto text-center"
      >
        <img className="mx-auto" src={bannerImage} alt="Banner" />
        <h2 className="text-[#FFFFFF] mt-6 mb-4 font-bold text-4xl">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h2>
        <p className="text-[#FFFFFF]/70 mb-6">
          Beyond Boundaries Beyond Limits
        </p>
        <button className="bg-[#E7FE29] text-[#131313]">
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
