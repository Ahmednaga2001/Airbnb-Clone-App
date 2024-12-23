import { getExolre } from "../../utils/api";
import Title from "../ui/Title";
import ExploreCard from "../home/ExploreCard";

export default async function Explore() {
  const exploreData = await getExolre();
  console.log(exploreData);

  return (
    <section className="pt-6">
      <div className="container">
        <Title>Explore Nearby</Title>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {
            exploreData.map((item) => (
              <ExploreCard
                key={item.img}
                img={item.img}
                distance={item.distance}
                location={item.location} />
            ))
          }
        </div>
      </div>
    </section>
  )
}
