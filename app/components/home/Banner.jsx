import Image from "next/image";
import banner from "../../Images/banner.webp"

export default function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[calc(100vh-84px)]">
      <Image src={banner}
        alt="Banner Image"
        className="object-cover object-left"
        fill />
      <div className="absolute top-1/2 translate-y-[-50%] w-full text-center">
        <p className="text-sm sm:text-xl">Not sure where to go? Perfect.</p>
        <button type="button" className="text-[#FE595E] bg-white px-10 py-4 shadow-md font-bold rounded-full">Search In London</button>
      </div>
    </div>
  )
}
