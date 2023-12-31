import React from "react";
import { iconUrlFromCode } from "../../services/weatherService";

const Forecast = ({ title, items }) => {
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row items-center justify-between text-white">
        {items.map((item, index) => (
          <div
            key={index}
            className="items-center flex flex-col justify-center"
          >
            <p className="font-light text-sm">{item.title}</p>
            <img src={iconUrlFromCode(item.icon)} className="w-12 my-2" />
            <p className="font-medium">{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
