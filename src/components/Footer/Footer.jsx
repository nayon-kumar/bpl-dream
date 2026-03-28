import React from "react";
import FooterCard from "./FooterCard/FooterCard";

import FooterLinks from "./FooterLinks/FooterLinks";

const Footer = () => {
  return (
    <footer className="mt-70 bg-[#06091A] relative h-250 sm:h-190 md:h-158">
      <FooterCard />
      <FooterLinks />
      <hr className="text-gray-200 mt-8" />
      <p className="text-center text-[#FFFFFF]/60 mt-4 mx-3">
        @2026 Your Company All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
