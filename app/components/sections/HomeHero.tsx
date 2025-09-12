import Image from "next/image";
import Button from "../ui/Button";

const HomeHero: React.FC = () => {
  return (
    <section className="relative h-[85vh] min-h-[500px] flex items-center justify-center text-center">
      {/* Background image */}
      <Image
        src="/home-page-main.jpg"
        alt="Edinburgh's historic Royal Mile"
        fill
        priority
        className="object-cover object-center"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 px-4 text-white max-w-3xl">
        <h1 className="text-3xl md:text-5xl mb-4 font-display">
          Edinburgh Festival Voluntary Guides Association
        </h1>
        <p className="text-lg md:text-2xl mb-8 font-sans">
          Come with us and explore Edinburgh's historic Royal Mile. Join us for
          a free walking tour along the Royal Mile – the heart of Edinburgh's
          historic Old Town.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/free-tours">Free Tours</Button>
          <Button href="/private-tours" variant="secondary">
            Private Tours
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
