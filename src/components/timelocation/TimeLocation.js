import React from "react";
import { formatToLocalTime } from "../../services/weatherService";

const TimeLocation = ({ weather: { dt, country, timezone, name } }) => {
  return (
    <div>
      <div className="flex justify-center my-6 items-center">
        <p className="text-white text-xl font-extralight">
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>
      <div className="flex items-center my-3 justify-center">
        <p className="text-white text-3xl font-medium">{`${name}, ${country}`}</p>
      </div>
    </div>
  );
};

export default TimeLocation;
