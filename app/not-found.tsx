import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <section className="bg-yellow-100 py-16 pt-32 font-sans">
      <div className="container mx-auto px-4 xl:px-12 flex flex-col items-center text-center text-[#1D080C] space-y-8">
        <Image
          src="/edinburgh-city-alt.jpg"
          alt="Edinburgh city skyline"
          width={800}
          height={450}
          className="w-full max-w-2xl h-auto rounded shadow"
        />
        <h1 className="text-4xl md:text-5xl font-display font-bold">
          Oops! Page not found
        </h1>
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl">
          We're sorry, but the page you were looking for doesn’t exist or may
          have been moved. Please check the URL or return to the homepage.
        </p>
        <Link
          href="/"
          className="inline-block bg-yellow-400 text-[#1D080C] px-6 py-3 rounded font-semibold hover:bg-yellow-300 transition"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
