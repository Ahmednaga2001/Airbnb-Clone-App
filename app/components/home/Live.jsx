import { getLive } from "../../utils/api";
import Title from "../ui/Title";
import LiveCard from "./LiveCard";

export default async function Live() {
  const liveData = await getLive();
  console.log(liveData);

  return (
    <section className="pt-16">
      <div className="container">
        <Title>Live Anywhere</Title>
        <div className='flex space-x-3 overflow-scroll no-scrollbar'>
          {
            liveData.map((item) => (
              <LiveCard key={item.title} img={item.img} title={item.title} />
            ))
          }
        </div>
      </div>

    </section>
  )
}
