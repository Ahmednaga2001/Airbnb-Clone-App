import Image from "next/image"

function LiveCard({ img, title }) {
  return (
    <div className="cursor-pointer hover:scale-105 transition transform duration-200 ease-out mr-3">
      <div className="relative h-80 w-80">
        <Image src={img} alt={title} fill />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  )
}

export default LiveCard
