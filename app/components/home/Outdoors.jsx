import Image from "next/image";
import Link from "next/link";

export default function Outdoors({ img, title, description, linkText }) {
  return (
    <div className="container pt-16 relative">
      <div className="relative h-96 min-w-[300px]">
        <Image src={img} alt={title} fill className="rounded-2xl -z-10 object-cover" />
      </div>
      <div className="absolute top-40 left-12">
        <h3 className='text-3xl mb-3 w-64'>{title}</h3>
        <p>{description}</p>
        <Link href="/" className="block text-sm p-4 w-fit rounded-lg text-center mt-5 text-white bg-gray-900">{linkText}</Link>
      </div>
    </div>
  )
}
