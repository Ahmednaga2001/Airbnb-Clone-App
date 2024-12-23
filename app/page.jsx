import Image from "next/image";
import Banner from "./components/home/Banner";
import Explore from "./components/home/Explore";
import Live from "./components/home/Live";
import Outdoors from "./components/home/Outdoors";
import outdoorsImage from "./Images/outdoors.webp"
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

export const metadata = {
  title: 'Home Page',
}
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Explore />
        <Live />
        <Outdoors img={outdoorsImage} title={"The Greatest Outdoors"} description={"Wishlists curated by Airbnb"} linkText="Get Inspired" />
      </main>
      <Footer />
    </>
  );
}
