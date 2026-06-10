import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLock } from "react-icons/fa";
import {
  DEFAULT_FOOTER_COLUMNS,
  DEFAULT_SITE_CONFIG,
  formatNavLabel,
  type FooterColumn,
} from "@/lib/site-config";

type FooterProps = {
  columns?: FooterColumn[];
  festivalYear?: string;
  facebookUrl?: string;
};

const Footer: React.FC<FooterProps> = ({
  columns = DEFAULT_FOOTER_COLUMNS,
  festivalYear = String(new Date().getFullYear()),
  facebookUrl = DEFAULT_SITE_CONFIG.facebookUrl,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-[#1D080C] font-sans border-t border-gray-200 border-solid border-t-4">
      <div className="container mx-auto px-4 xl:px-12 py-16 lg:py-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/logo.png"
              alt="Edinburgh Festival Voluntary Guides Association"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-xl font-bold mb-4">{column.title}</h3>
              <ul className="space-y-3 text-gray-700">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-[#000] flex items-center"
                    >
                      {formatNavLabel(link.label, festivalYear)}
                      {link.protected && <FaLock className="ml-1" />}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="my-12 border-gray-200" />

        <div className="flex flex-col lg:flex-row justify-between gap-12 text-sm text-gray-600">
          <div>
            <p className="mt-2">
              © {currentYear} Copyright EFVGA 2017 - {currentYear}. All rights
              reserved.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <Link
                href={facebookUrl}
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
