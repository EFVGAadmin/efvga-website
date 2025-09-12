import HeroAlt from "@/app/components/sections/HeroAlt";
import Link from "next/link";

export default function OpenStreets() {
  return (
    <HeroAlt
      imageSrc="/umbrella.png"
      imageAlt="Guide holding umbrella during tour"
      caption="Photo: EFVGA"
    >
      <h1 className="text-3xl mb-4 font-display">
        Free walking tours during Edinburgh's Open Streets days
      </h1>
      <p className="mb-6 font-semibold">
        A rare chance to explore Edinburgh's historic Old Town without the
        traffic.
      </p>
      <p>
        These tours provide a welcome opportunity to explore the Royal Mile –
        the heart of Edinburgh's historic Old Town – on roads that will be
        completely closed to motor vehicles.
      </p>
      <p>
        The tours are led by the same expert local guides who lead our
        highly-praised{" "}
        <Link href="/free-tours" className="text-orange-700 underline">
          free Royal Mile tours
        </Link>{" "}
        during the Edinburgh International Festival and Fringe.
      </p>
      <p>
        For details of dates, times and meeting point, please check back here
        nearer the time.
      </p>
      <p className="mt-6">
        If you prefer not to wait for our Open Streets tours to resume, talk to
        us about a{" "}
        <Link href="/private-tours" className="text-orange-700 underline">
          custom tour
        </Link>{" "}
        for your family or group.
      </p>
    </HeroAlt>
  );
}
