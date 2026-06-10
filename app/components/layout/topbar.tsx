import React from "react";
import { DEFAULT_SITE_CONFIG } from "@/lib/site-config";

type TopbarProps = {
  tagline?: string;
  orgName?: string;
};

export const Topbar: React.FC<TopbarProps> = ({
  tagline = DEFAULT_SITE_CONFIG.topbarTagline,
  orgName = DEFAULT_SITE_CONFIG.topbarOrgName,
}) => {
  return (
    <div className="bg-black text-white text-sm font-sans">
      <div className="mx-auto container px-4 xl:px-12 py-2 flex flex-col md:flex-row md:flex-row-reverse items-center justify-between gap-4">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <p className="font-medium lg:text-lg text-center md:text-right">
            {tagline}
          </p>
        </div>

        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <p className="font-medium lg:text-lg text-center md:text-left">
            {orgName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
