import Link from "next/link"

export default function Footer() {
  const links = [
    { title: "ABOUT", links: ["How Aribnb works", "Newsroom", "Investors", "Airbnbplus", "Airbnb Luxe"] },
    { title: "COMMUNITY", links: ["Accessbility", "This is not a real site", "Its a pretty awesome clone", "Referrals", "Papafam"] },
    { title: "HOST", links: ["Accessbility", "This is not a real site", "Its a pretty awesome clone", "Referrals", "Papafam"] },
    { title: "SUPPORT", links: ["Accessbility", "This is not a real site", "Its a pretty awesome clone", "Referrals", "Papafam"] },
  ]
  return (
    <footer className="mt-16 bg-gray-100">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 py-14 text-gray-600">
          {
            links.map((links, index) => {
              return (
                <div key={index} className="space-y-4 text-sm text-gray-800">
                  <h5 className="font-bold">{links.title}</h5>
                  {
                    links.links.map((link, index) => {
                      return (
                        <Link href={link} key={index} className="block">
                          {link}
                        </Link>
                      )
                    })
                  }
                </div>
              )
            })
          }
        </div>
      </div>
    </footer>
  )
}
