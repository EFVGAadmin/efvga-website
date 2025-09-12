import React from "react";
import { FiPhoneCall, FiClock } from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaTiktok } from "react-icons/fa";

const PHONE_NUMBER = "07930 851 113";
const SERVICE_TIME = "Sunday 10:00am";

/**
 * Topbar
 * Renders a red-gradient strip with contact info and social links.
 * Mobile: phone + social icons
 * Desktop (md+): phone, service time, social icons
 */
export const Topbar: React.FC = () => {
  return (
    <div className="bg-black text-white text-sm font-sans">
      <div className="mx-auto container px-4 xl:px-12 py-2 flex flex-col md:flex-row md:flex-row-reverse items-center justify-between gap-4">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <p className="font-medium lg:text-lg text-center md:text-right">
            Guiding since 1947 &#x2022; Patron: Lord Provost of Edinburgh
          </p>
        </div>

        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <p className="font-medium lg:text-lg text-center md:text-left">
            Edinburgh Festival Voluntary Guides Association
          </p>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
