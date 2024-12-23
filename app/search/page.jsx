import { format } from "date-fns";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { getSearchResult } from "../utils/api";
import ListingCard from "../components/search/ListingCard";
import Map from "../components/search/Map";

export const metadata = {
  title: 'Search Page',
}
export default async function SearchResult({ params, searchParams: { startDate, endDate, location, numOfGuests } }) {
  console.log(numOfGuests);

  let formatedStartDate;
  let formatedEndDate;
  if (startDate && endDate) {
    formatedStartDate = format(new Date(startDate), "dd MMMM yy");
    formatedEndDate = format(new Date(endDate), "dd MMMM yy");
  }
  const range = `${formatedStartDate} - ${formatedEndDate}`;

  const searchResultsData = await getSearchResult();
  console.log((searchResultsData));

  return (
    <>
      <Header plcaeholder={`${location} | ${range} | ${numOfGuests} Guests`} />
      <main>
        <section>
          <div className="container xl:flex">
            <div className="pr-4 pt-16">
              <p className="text-xs">300+ Stays - {range} - for {numOfGuests} guests</p>
              <h1 className="text-3xl font-semibold mt-2 mb-6">Stays In {location[0].toUpperCase() + location.slice(1)}</h1>
              <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                <button className="filter-btn">Cancellation Flexibility</button>
                <button className="filter-btn">Type of place</button>
                <button className="filter-btn">Price</button>
                <button className="filter-btn">Rooms and Beds</button>
                <button className="filter-btn">More Filters</button>
              </div>
              <div>
                {
                  searchResultsData.map((item) => {
                    return (
                      <ListingCard key={item.title}
                        img={item.img} title={item.title}
                        location={item.location}
                        description={item.description}
                        star={item.star}
                        total={item.total}
                        price={item.price} />
                    )
                  })
                }
              </div>
            </div>
            <div className="w-[100%] h-80 mt-12 xl:mt-0 xl:inline-flex xl:min-w-[35%] xl:h-auto">
              <Map searchResultsData={searchResultsData} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
