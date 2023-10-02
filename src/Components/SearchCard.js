import { useState } from "react";
import search from "../images/search.png";
import dropdown from "../images/dropdown.png";

export default function SearchCard(props) {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
    props.search(e.target.value);
  };

  return (
    <div className="rounded-2xl px-5 py-3 border-2 border-white bg-gray-200 flex items-center">
      <div className="flex bg-white text-gray-700 w-72 rounded-2xl justify-between">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 rounded-2xl focus:outline-none"
          value={searchInput}
          onChange={handleSearchInputChange}
        />
        <img src={search} alt="search" className="w-12" />
      </div>
      <div className="mx-4 flex">
        <p>Relevance</p>
        <img src={dropdown} alt="dropdown" className="w-4" />
      </div>
      <div className="mx-4 flex">
        <p>All Brands</p>
        <img src={dropdown} alt="dropdown" className="w-4" />
      </div>
    </div>
  );
}
