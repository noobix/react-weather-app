import React from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { toast } from "react-toastify";

const Inputs = ({ setquery, units, setunits }) => {
  const [city, setcity] = React.useState("");
  function handleSearch() {
    if (city) setquery({ q: city });
  }
  function handleUnits(e) {
    const selected = e.currentTarget.name;
    if (units !== selected) setunits(selected);
  }
  function handleLocation() {
    if (navigator.geolocation) {
      toast.info("Fetching location data");
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        setquery({ lat, lon });
      });
    }
  }
  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          value={city}
          onChange={(e) => setcity(e.target.value)}
          type="text"
          placeholder="Search for city"
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        <UilSearch
          size={25}
          className="cursor-pointer text-white transition ease-out hover:scale-125"
          onClick={handleSearch}
        />
        <UilLocationPoint
          size={25}
          className="cursor-pointer text-white transition ease-out hover:scale-125"
          onClick={handleLocation}
        />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          name="metric"
          className="text-xl text-white font-light hover:scale-125 transition ease-out"
          onClick={handleUnits}
        >
          °C
        </button>
        <p className="text-xl text-white mx-1">|</p>
        <button
          name="imperial"
          className="text-xl text-white font-light hover:scale-125 transition ease-out"
          onClick={handleUnits}
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
