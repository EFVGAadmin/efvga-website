import HeroAlt from "@/app/components/sections/HeroAlt";
import Link from "next/link";

export default function EdinburghTalks() {
  return (
    <HeroAlt
      imageSrc="/edinburgh-city.jpg"
      imageAlt="Lauriston Castle lecture"
      caption="Photo: EFVGA"
    >
      <h1 className="text-3xl mb-4 font-display">
        Illustrated talks on Scottish and Edinburgh history
      </h1>
      <p className="mb-6 font-semibold">
        Learn more about the fascinating history of Scotland and its capital at
        these illustrated talks.
      </p>

      <p>
        This year for the first time the Edinburgh Festival Voluntary Guides are
        joining together with Museums &amp; Galleries Edinburgh to bring you a
        series of 4 illustrated talks which will complement our highly-praised
        Royal Mile tours. They are given by expert speakers and will take place
        throughout the summer months.
      </p>

      <h2 className="text-2xl font-display my-6">Venue and booking</h2>
      <p>
        These new lectures will all take place at Lauriston Castle, Davidson's
        Mains, Edinburgh. They will start at 10.30am and will last approximately
        1 hour. All the lecture mornings include a friendly lecture where you
        can meet our guest speaker, have a coffee and a sweet treat and also get
        a special tour of Lauriston Castle.
      </p>
      <p>
        To book your place, please click on the link below the description of
        each talk and this will take you through to the Museums &amp; Galleries
        Edinburgh webpage.
      </p>
      <p>
        OR you can book directly by calling Lauriston Castle on 0131 336 2060.
      </p>

      <h2 className="text-2xl font-display my-6">Our summer 2023 talks</h2>

      <ol className="list-decimal ml-6 space-y-8 text-lg">
        <li>
          <h3 className="font-semibold mb-2">
            Duncan Napier – Tuesday 27th June at 10.30am
          </h3>
          <p className="mb-2">
            Join us for the tale of Duncan Napier who founded the well-known
            herbalist shop in Edinburgh in 1860. Near the end of his long and
            remarkable life, Duncan Napier (1831-1921) dictated some of his
            early memories to his sons Andrew and Duncan Jnr. These were
            recorded in two journals which are now in the possession of his
            great grand-daughter Lynda Melvin.
          </p>
          <p className="mb-2">
            Duncan's story is one of real courage in adversity. His journals
            describe a very tough childhood. A chance encounter with an
            Edinburgh lawyer, the philanthropist John Hope, rescued him from a
            life of toil, poverty and despair. Thanks to John Hope, Duncan
            received an education; was introduced to Christianity and was
            persuaded to give up alcohol. Another stroke of luck introduced
            Duncan to herbalism and it is John Hope who helped him open his
            first shop. This illustrated talk will recount Duncan's struggles
            against the odds to succeed and in doing so, give a rare authentic
            working-class description of life in the overcrowded Old Town of
            Edinburgh. Renowned Edinburgh historian,{" "}
            <strong>Eric Melvin</strong>, is our speaker.
          </p>
          <p className="mb-2">
            Book on the link below or by calling Lauriston Castle on 0131 336
            2060.
          </p>
          <Link
            href="https://www.edinburghmuseums.org.uk/whats-on/fresh-air-summer-morning-story-duncan-napier"
            target="_blank"
            className="text-orange-700 underline"
          >
            Booking link
          </Link>
        </li>

        <li>
          <h3 className="font-semibold mb-2">
            Mary, Queen of Scots – Monday 10th July at 10.30am
          </h3>
          <p className="mb-2">
            On 10 July 1559, Henry II King of France died after a jousting
            accident. Standing by his bedside were his son the Dauphin Francis
            and his young bride Mary, Queen of Scots. Thus, at the age of just
            15, Francis became King of France while Mary (aged 16) became Queen
            Consort. It looked as though the Auld Alliance between Scotland and
            France would become even stronger. But tragedy struck again when, in
            December 1560, the sickly Francis died and Mary took the fateful
            decision to return to Scotland – a country she had not seen since
            childhood.
          </p>
          <p className="mb-2">
            Little did she know the challenges that lay ahead: a feuding
            nobility, an ambitious half-brother, and a religious revolution led
            by the fiery John Knox. This illustrated talk will chart the events
            that would ultimately lead to Mary's execution at Fotheringhay
            Castle in February 1587. Speaker: <strong>Eric Melvin</strong>.
          </p>
          <p className="mb-2">
            Book on the link below or by calling Lauriston Castle on 0131 336
            2060.
          </p>
          <Link
            href="https://www.edinburghmuseums.org.uk/whats-on-mary-queen-scots"
            target="_blank"
            className="text-orange-700 underline"
          >
            Booking link
          </Link>
        </li>

        <li>
          <h3 className="font-semibold mb-2">
            “The Cold Hand of Charity” – Tales from the Edinburgh Poorhouse –
            Tuesday 18th July at 10.30am
          </h3>
          <p className="mb-2">
            Taken entirely from contemporary accounts, this illustrated talk by
            <strong>Alastair MacDonald</strong> tells the extraordinary story of
            the Edinburgh City Poorhouse at Craiglockhart, which opened in 1870
            as a model institution to replace the old insanitary and overcrowded
            Poorhouse at Greyfriars. Often moving, shocking and sometimes highly
            amusing, the tales still resonate today.
          </p>
          <p className="mb-2">
            Book on the link below or by calling Lauriston Castle on 0131 336
            2060.
          </p>
          <Link
            href="http://www.edinburghmuseums.org.uk/whats-on/cold-hand-charity-tales-edinburgh-poorhouse"
            target="_blank"
            className="text-orange-700 underline"
          >
            Booking link
          </Link>
        </li>

        <li>
          <h3 className="font-semibold mb-2">
            Stars, Time and Mountains – The Legacy of the Amazing Charles Piazzi
            Smyth – Tuesday 22nd August at 10.30am
          </h3>
          <p className="mb-2">
            <strong>Professor Andy Lawrence</strong> (Regius Professor of
            Astronomy, University of Edinburgh) surveys the life of Charles
            Piazzi Smyth – second Astronomer Royal for Scotland, Victorian
            polymath and pioneer of mountain-top astronomy, time signals, stereo
            photography and much more. The talk will feature unique images from
            the archives of the Royal Observatory Edinburgh.
          </p>
          <p className="mb-2">
            Book on the link below or by calling Lauriston Castle on 0131 3365
            2060.
          </p>
          <Link
            href="https://www.edinburghmuseums.org.uk/whats-on/stars-time-and-mountains-legacy-amazing-charles-piazzi-smyth"
            target="_blank"
            className="text-orange-700 underline"
          >
            Booking link
          </Link>
        </li>
      </ol>
    </HeroAlt>
  );
}
