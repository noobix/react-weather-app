import React from "react";

const TopButtons = ({ setquery }) => {
  const cities = [
    {
      id: 1,
      title: "Kumasi",
    },
    {
      id: 2,
      title: "Tamale",
    },
    {
      id: 3,
      title: "Accra",
    },
    {
      id: 4,
      title: "Takoradi",
    },
    {
      id: 5,
      title: "Elmina",
    },
  ];
  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          onClick={() => setquery({ q: city.title })}
          className="text-white text-lg font-medium"
        >
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
