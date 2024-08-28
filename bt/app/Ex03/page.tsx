import axios from "axios";
import React from "react";

async function getData() {
  const res = await axios.get(
    "https://api.open-meteo.com/v1/forecast?latitude=20.9714&longitude=105.7788&hourly=temperature_2m,weathercode"
  );

  return res.data.hourly;
}

function getWeatherStatus(code: any ) {
  const weatherConditions = {
    0: "Clear Sky",
    1: "Mainly Clear",
    2: "Partly Cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing Rime Fog",
    51: "Light Drizzle",
  };

  return weatherConditions[code] || "Unknown Weather Condition";
}

export default async function Page() {
  const weatherData = await getData();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Weather Data in Ha Dong</h1>
      <ul className="space-y-2">
        {weatherData.time.map((time: string, index: number) => (
          <li key={index} className="bg-gray-50 p-2 rounded shadow">
            <div>
              <span className="font-semibold">Time:</span> {time}
            </div>
            <div>
              <span className="font-semibold">Temperature:</span>{" "}
              {weatherData.temperature_2m[index]}°C
            </div>
            <div>
              <span className="font-semibold">Weather:</span>{" "}
              {getWeatherStatus(weatherData.weathercode[index])}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
