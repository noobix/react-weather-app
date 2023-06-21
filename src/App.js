import "./App.css";
import TopButtons from "./components/topbuttons/TopButtons";
import Inputs from "./components/inputs/Inputs";
import TimeLocation from "./components/timelocation/TimeLocation";
import TemperatureDetails from "./components/temperaturedetails/TemperatureDetails";
import Forecast from "./components/forecast/Forecast";
import getFormatedWeatherData from "./services/weatherService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";

function App() {
  const [query, setquery] = React.useState({ q: "accra" });
  const [units, setunits] = React.useState("metric");
  const [weather, setweather] = React.useState(null);
  React.useEffect(() => {
    const fetchWeather = async () => {
      // const message = query.q ? query.q : "Loading...";
      // toast.info("Fetching weather for" + message);
      await getFormatedWeatherData({ ...query, units }).then((data) => {
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`
        );
        setweather(data);
      });
    };
    fetchWeather();
  }, [query, units]);
  function changeBackground() {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";
    return "from-yellow-700 to-orange-700";
  }
  return (
    <div
      className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br ${changeBackground()} h-fit shadow-xl shadow-gray-700`}
    >
      <TopButtons setquery={setquery} />
      <Inputs setquery={setquery} units={units} setunits={setunits} />
      {weather && (
        <React.Fragment>
          <TimeLocation weather={weather} />
          <TemperatureDetails weather={weather} />
          <Forecast title="hourly forcast" items={weather.hourly} />
          <Forecast title="daily forcast" items={weather.daily} />
        </React.Fragment>
      )}
      <ToastContainer autoClose={5000} theme="colored" newestOnTop />
    </div>
  );
}

export default App;
