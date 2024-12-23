import { HeartIcon, StarIcon } from "@heroicons/react/solid";
import Image from "next/image";

export default function ListingCard({ img, title, location, description, star, total, price }) {
  return (
    <div className="flex flex-col md:flex-row py-2 px-2 border-b cursor-pointer pr-4 hover:opacity-80 hover:shadow-md">
      <div className="relative h-52 w-full md:w-80 flex-shrink-0">
        <Image src={img} alt={title} fill className="rounded-2xl object-cover" />
      </div>
      <div className="flex flex-col flex-grow md:pl-5 pt-4 md:pt-0">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className='border-b w-10 pt-2' />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>
          <div>
            <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
