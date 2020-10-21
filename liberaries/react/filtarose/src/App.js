import React, { useState, useEffect } from "react";
import "./App.css";
import staticHotels from "./mocks/hotelsList";
import hotelFactory from "./utils/hotel.factory";
import _filter from "lodash/filter";
function App() {
  const [formattedHotelsListSM] = useState(() => {
    return Object.values(staticHotels.hotels).map(hotelFactory);
  });
  const [formattedHotelsListLG] = useState(() => {
    return Object.values(staticHotels.hotels).map((hotel) => ({
      filterData: hotelFactory(hotel),
      ...hotel,
    }));
  });
  const [filteredLGList, setFilteredLGList] = useState(formattedHotelsListLG);
  const [filteredSMList, setFilteredSMList] = useState(formattedHotelsListSM);
  const [nameFilter, setNameFilter] = useState("");

  useEffect(() => {
    //LARGE DATA SETS
    performance.mark("large data amount");
    setFilteredLGList(
      formattedHotelsListLG.filter((hotel) =>
        hotel.filterData.name.toLowerCase().includes(nameFilter.toLowerCase())
      )
    );
    performance.measure("large measures", "large data amount");

    //SMALL DATA SETS
    performance.mark("small data amount");
    setFilteredSMList(
      formattedHotelsListSM.filter(({ name }) =>
        name.toLowerCase().includes(nameFilter.toLowerCase())
      )
    );

    performance.measure("small measures", "small data amount");

    console.log({
      small: performance.getEntriesByName("small measures"),
      large: performance.getEntriesByName("large measures"),
    });
  }, [nameFilter]);

  return (
    <>
      <div className="container search">
        <input
          type="search"
          onKeyUp={(e) => {
            e.target.value.length > 3 && setNameFilter(e.target.value);
          }}
        />
      </div>
      <div className="container">
        <div>
          {filteredSMList.map(({ name, atgHotelId }) => (
            <div key={atgHotelId}>{name}</div>
          ))}
        </div>
        <div>
          {filteredLGList.map((hotel) => (
            <div key={hotel.atgHotelId}>{hotel.filterData.name}</div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
