"use client";
import { SearchIcon, UsersIcon } from "@heroicons/react/solid"
import Navbar from "./Navbar"
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Link from "next/link";
export default function SearchBar({ placeholder }) {

  const [input, setInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numOfGuests, setNumOfGuests] = useState(1)

  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  }
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <>
      <div className="flex items-center border-2 rounded-full py-2 shadow-sm sm:w-[85%] md:w-[75%] mt-3 lg:mt-0 mx-auto ">
        <input type="text"
          placeholder={placeholder || "Start Your Search"}
          className="text-sm text-gray-600 placeholder-gray-400 flex-grow pl-5 bg-transparent outline-none"
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
            console.log(input);
            ;
          }} />
        <SearchIcon className="inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer mx-2" />
      </div>
      {input &&
        <div className="absolute top-[100%] left-[50%] translate-x-[-50%] flex flex-col">
          <DateRangePicker ranges={[selectionRange]}
            onChange={handleSelect} rangeColors={['#FD5B61']} minDate={new Date()} />

          <div className="flex items-center border-b bg-white p-4">
            <h2 className="text-2xl flex-grow font-semibold">Number Of Guests</h2>
            <UsersIcon className="h-5" />
            <input type="number"
              value={numOfGuests}
              min={1}
              onChange={(e) => setNumOfGuests(Number(e.target.value))} />
          </div>
          <div className="flex items-center justify-center gap-12 bg-white p-5">
            <button type="button" className="text-gray-500" onClick={() => {
              setInput("")
            }}>Cancel</button>
            <Link href={
              { pathname: "/search", search: `?location=${input}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&numOfGuests=${numOfGuests}` }
            }
              onClick={() => {
                setInput("")
              }} className="text-red-400">Search</Link>
          </div>

        </div>
      }
    </>
  )
}
