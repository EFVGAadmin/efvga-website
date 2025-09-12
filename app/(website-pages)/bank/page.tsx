import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate to EFVGA | Edinburgh Festival Voluntary Guides Association",
  description:
    "Support the Edinburgh Festival Voluntary Guides Association. Learn how to make a donation and help fund our free walking tours and volunteer programme.",
};

import HeroAlt from "@/app/components/sections/HeroAlt";

export default function Bank() {
  return (
    <HeroAlt
      imageSrc="/home-page-main.jpg"
      imageAlt="Edinburgh's Royal Mile"
      caption="Photo: Dave Hitchborne"
    >
      <h1 className="text-3xl mb-4 font-display">Make a Donation to EFVGA</h1>

      <p>
        The Edinburgh Festival Voluntary Guides Association (EFVGA) was founded
        in 1947, the same year as the Edinburgh International Festival, with the
        aim of providing guided tours for Festival visitors. We have been
        running our tours every year since then.
      </p>

      <p>
        The Association is funded entirely by donations and by the modest fees
        we charge for private tours. We do not receive financial support from
        any public bodies. Our guides are all volunteers, and receive no payment
        of any kind. If you have enjoyed one of our tours, please consider
        making a donation towards our running costs. The easiest way to do that
        is with a bank transfer to our account:
      </p>

      <div className="my-8 space-y-1">
        <p className="font-bold">
          EDINBURGH FESTIVAL VOLUNTARY GUIDES ASSOCIATION
        </p>
        <p className="font-bold">Business Current Account</p>
        <p className="font-bold">A/C 00283754 &nbsp; Sort Code 83-19-10</p>
        <p className="font-bold">BIC RBOSGB2L</p>
        <p className="font-bold">IBAN GB93RBOS83191000283754</p>
      </div>
    </HeroAlt>
  );
}
