import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLock } from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Make a Donation", href: "/bank" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQs", href: "/tours-faq" },
  { label: "Contact Us", href: "/contact_us" },
];

const toursLinks = [
  { label: "About Edinburgh", href: "/about-edinburgh" },
  { label: "Free Tours 2025", href: "/free-tours" },
  { label: "Private Tours", href: "/private-tours" },
  { label: "Safety on Tours", href: "/tour-safety" },
];

const guidesLinks = [
  { label: "Becoming a guide", href: "/becoming" },
  { label: "Guides Login", href: "/guides", protected: true },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-[#1D080C] font-sans border-t border-gray-200 border-solid border-t-4">
      <div className="container mx-auto px-4 xl:px-12 py-16 lg:py-24">
        {/* Top columns */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Location */}
          <div>
            <Image
              src="/logo.png"
              alt="Kingdom Family Church Logo"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-gray-700">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-[#000]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Tours</h3>
            <ul className="space-y-3 text-gray-700">
              {toursLinks.map((link) => {
                if (link.label === "Free Tours 2025") {
                  return (
                    <li key={link.label}>
                      <Link href={link.href} className="hover:text-[#000]">
                        Free Tours {currentYear}
                      </Link>
                    </li>
                  );
                }
                return (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-[#000]">
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h3 className="text-xl font-bold mb-4">Guides</h3>
            <ul className="space-y-3 text-gray-700">
              {guidesLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-[#000] flex items-center"
                  >
                    {link.label}
                    {link.protected && <FaLock className="ml-1" />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-12 border-gray-200" />

        {/* Bottom bar */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 text-sm text-gray-600">
          {/* Left info */}
          <div>
            <p className="mt-2">
              © {currentYear} Copyright EFVGA 2017 - {currentYear}. All rights
              reserved.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-4 mt-4">
              <Link
                href="https://www.facebook.com/EFVGA/?locale=en_GB"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex items-center gap-2 hover:text-[#1877F2] transition-colors"
              >
                <span className="text-gray-600 hover:text-[#1877F2] underline">
                  Follow us on Facebook
                </span>
                <FaFacebookF className="text-[#1877F2]" />
              </Link>
            </div>
          </div>

          {/* Right info */}
          <div className="space-y-2 max-w-md">
            <p>
              <Link href="/privacy" className="hover:text-[#000]">
                Privacy Policy
              </Link>
            </p>

            <p>
              <Link
                href="https://www.bunkerdigital.co.uk"
                className="hover:text-[#000] underline"
                target="_blank"
              >
                Website design & development by BunkerDigital
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
