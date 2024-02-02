import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import axios from "axios";

function App() {
  const [inputValue, setInputValue] = useState("ankara");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const [data, setData] = useState({
    days: [],
  });

  const handleButtonChange = () => {
    const apiKey = "V6AWZNVPM3LTHC8HK9GUNYAWJ";
    axios
      .get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${inputValue}/?key=V6AWZNVPM3LTHC8HK9GUNYAWJ&unitGroup=metric&include=days`
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("API request error:", error);
      });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleButtonChange();
    }
  };

  const upper = `${inputValue[0].toUpperCase()}${inputValue
    .slice(1)
    .toLowerCase()}`;
  console.log("data2", data);

  return (
    <div>
      <div>
        <h1>Weather App</h1>
      </div>
      <div className="inputTag">
        <input
          type="text"
          placeholder="Enter The City Name"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          id="btn"
          className="btn btn-outline-light"
          onClick={handleButtonChange}
        >
          Search
        </button>
      </div>
      <div>
        <h2 className="text-center text-white">"{upper}"</h2>
      </div>
      <div className="row cardGroup">
        {data && data.days && data.days.length > 0 && (
          <>
            <Card
              cardTitle={data.days[0].datetime}
              degree={data.days[0].temp}
              himidity={data.days[0].humidity}
              windspeed={data.days[0].windspeed}
              icons={data.days[0].icon}
            />
            <Card
              cardTitle={data.days[1].datetime}
              degree={data.days[1].temp}
              himidity={data.days[1].humidity}
              windspeed={data.days[1].windspeed}
              icons={data.days[1].icon}
            />
            <Card
              cardTitle={data.days[2].datetime}
              degree={data.days[2].temp}
              himidity={data.days[2].humidity}
              windspeed={data.days[2].windspeed}
              icons={data.days[2].icon}
            />
            <Card
              cardTitle={data.days[3].datetime}
              degree={data.days[3].temp}
              himidity={data.days[3].humidity}
              windspeed={data.days[3].windspeed}
              icons={data.days[3].icon}
            />
            <Card
              cardTitle={data.days[4].datetime}
              degree={data.days[4].temp}
              himidity={data.days[4].humidity}
              windspeed={data.days[4].windspeed}
              icons={data.days[4].icon}
            />
            <Card
              cardTitle={data.days[5].datetime}
              degree={data.days[5].temp}
              himidity={data.days[5].humidity}
              windspeed={data.days[5].windspeed}
              icons={data.days[5].icon}
            />
            <Card
              cardTitle={data.days[6].datetime}
              degree={data.days[6].temp}
              himidity={data.days[6].humidity}
              windspeed={data.days[6].windspeed}
              icons={data.days[6].icon}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
