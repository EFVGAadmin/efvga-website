import HeroAlt from "@/app/components/sections/HeroAlt";

export default function HistoryPage() {
  return (
    <HeroAlt
      imageSrc="/edinburgh-city.jpg"
      imageAlt="Edinburgh Old Town skyline"
      caption="Photo: EFVGA"
    >
      <h1 className="text-3xl mb-4 font-display">
        A short history of the Association
      </h1>
      <p>
        The roots of the Edinburgh Festival Voluntary Guides Association go back
        to 1947. That was when Sir John Falconer, the Lord Provost of Edinburgh
        and the driving force behind the first Edinburgh Festival, appealed for
        local people to volunteer to run walking tours of the Royal Mile for the
        many visitors that were expected to attend the Festival. Twelve
        volunteers stepped forward. The tours, which were advertised in the
        Festival's official Souvenir Programme, attracted large numbers of
        visitors and received favourable mentions in the press.
      </p>
      <p>
        Further volunteers were recruited for the 1948 Festival, at which point
        the group was officially constituted as the Edinburgh Festival Voluntary
        Guides Association, with John Bowman, a former City Water Engineer,
        serving as its first president. We have been running tours as part of
        the International Festival and the Festival Fringe ever since.
      </p>
      <p>
        In those early year, the Festival Society took responsibility for
        approving our volunteers and for providing secretarial and financial
        assistance. A meeting place for the tours was provided in Cannonball
        House, near the entrance to Edinburgh Castle.
      </p>
      <p>
        In 1985, the Festival Society discontinued its support. Fortunately, the
        Department of Extra-Mural Studies at Edinburgh University stepped in
        with an offer of both secretarial and financial help, an arrangement
        which was to last for seven years. This was mainly thanks to the
        enthusiastic support of its former director, Basil Skinner, a well-known
        local historian and campaigner.
      </p>
      <p>
        In 1998, in order to increase our public profile, we became officially
        part of the Edinburgh Festival Fringe rather than the International
        Festival.
      </p>

      <h2 className="text-2xl font-display my-6">Self-supporting</h2>
      <p>
        Since 2003, the Association has been entirely self-supporting. We
        receive no public funding of any kind, but are instead financed by
        donations and by the charges we make for custom tours outside the
        Festival season.
      </p>
      <p>
        In 2013, we were obliged to move our base out of Cannonball House –
        after 67 years. Thanks to the support of the City of Edinburgh Council,
        we now use the City Chambers as our meeting point.
      </p>
      <p>
        In 2019, the Association became part of Edinburgh's Open Streets
        project, in which most of the Royal Mile and other streets in the Old
        Town are closed to traffic – and therefore open to visitors on foot – on
        one Sunday afternoon each month. These afternoons have provided us with
        an excellent opportunity to run our tours in a traffic-free environment.
      </p>

      <h2 className="text-2xl font-display my-6">Covid-19</h2>
      <p>
        In 2020, we suffered our biggest setback – along with many hundreds of
        other organisations and individuals – when the entire festival season
        was cancelled because of the Covid-19 pandemic. Despite this we managed
        to provide a very much reduced programme of tours in 2020 and with more
        tours in 2021. In 2022, we look forward to offering a wider choice of
        tours once more. That means that we have managed to provide a service as
        an integral part of Edinburgh's summer festivals every year since 1947.
        We have no doubt that we will be back in full in 2022 and for many years
        to come.
      </p>
    </HeroAlt>
  );
}
