import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Root
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      // Public site pages
      {
        source: "/free-tours.html",
        destination: "/free-tours",
        permanent: true,
      },
      {
        source: "/private-tours.html",
        destination: "/private-tours",
        permanent: true,
      },
      {
        source: "/bank.html",
        destination: "/bank",
        permanent: true,
      },
      {
        source: "/tour-safety.html",
        destination: "/tour-safety",
        permanent: true,
      },
      {
        source: "/tours-faq.html",
        destination: "/tours-faq",
        permanent: true,
      },
      {
        source: "/testimonials.html",
        destination: "/testimonials",
        permanent: true,
      },
      {
        source: "/about-edinburgh.html",
        destination: "/about-edinburgh",
        permanent: true,
      },
      {
        source: "/becoming.html",
        destination: "/becoming",
        permanent: true,
      },
      {
        source: "/contact_us.html",
        destination: "/contact_us",
        permanent: true,
      },
      {
        source: "/history.html",
        destination: "/history",
        permanent: true,
      },
      {
        source: "/edinburgh-talks.html",
        destination: "/edinburgh-talks",
        permanent: true,
      },
      {
        source: "/open-streets.html",
        destination: "/open-streets",
        permanent: true,
      },
      // Guides area
      {
        source: "/guides/index.html",
        destination: "/guides/home",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
