import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./WeatherApp.css";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelslike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze"
  });

  const updateInfo = (result) => {
    setWeatherInfo(result);
  };

  const getWeatherVideo = (info) => {
    if (!info || !info.temp || !info.humidity) return null;

    if (info.humidity > 80) {
      console.log("🌧️ Rain video selected");
      return "/videos/rain.mp4";
    }

    if (info.temp < 15) {
      console.log("☁️ Clouds video selected");
      return "/videos/clouds.mp4";
    }

    if (info.temp >= 15) {
      console.log("☀️ Sunny video selected");
      return "/videos/sunny.mp4";
    }

    return null; // No fallback
  };

  const videoSrc = getWeatherVideo(weatherInfo);

  return (
    <div className="weather-container" style={{ textAlign: "center" }}>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />



      {videoSrc && (
    <video
        key={videoSrc}  // <--- THIS forces reload when src changes
      autoPlay
        loop
      muted
      playsInline
      className="background-video"
    >
    <source src={videoSrc} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
)}

    </div>
  );
}
