import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import CarGrid from "./Components/CarGrid";
import SearchCard from "./Components/SearchCard";
import Pagination from "./Components/Pagination";
import Data from "./data.json";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const nav = useNavigate();
  const search = (searchInput) => {
    setSearchInput(searchInput);
    nav("/");
  };

  const filteredCarData = Data.cars.filter((car) =>
    car.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="bg-gray-300 h-full px-10 pb-2 font-[Nunito] text-gray-1000">
      <Routes>
        <Route
          path="/page/:page"
          element={
            <>
              <SearchCard search={search} />
              <CarGrid cars={filteredCarData} />
              <Pagination filteredCarData={filteredCarData} />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <SearchCard search={search} />
              <CarGrid cars={filteredCarData} />
              <Pagination filteredCarData={filteredCarData} />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
