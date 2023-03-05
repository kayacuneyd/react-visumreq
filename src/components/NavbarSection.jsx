import React from 'react'
const [searchTerm, setSearchTerm] = useState("");

export default function NavbarSection() {
  return (
    <div className="relative">
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-blue-400">
                <p className="text-7xl md:text-5xl sm:text-3xl pb-8 text-center">Kaya VisumReq React</p>
                <input type="text" onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search" className="input input-bordered input-lg w-96" />
                <p className="text-center pt-2 pb-2">Please write a name of a country</p>
        </div>

    </div>
  )
}
