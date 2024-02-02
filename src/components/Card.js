import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App.css";
function Card(props) {
  let iconSrc;
  const [daysName, setDaysName] = useState(props.cardTitle);

  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };

  const turkishDateWithDay = new Date(daysName).toLocaleDateString(
    "tr",
    options
  );
  console.log(turkishDateWithDay);
  // Örnek çıktı: "Cuma, 1 Şubat 2024"

  if (props.icons === "clear-day") {
    iconSrc = "Assets/sunny.png";
  } else if (props.icons === "partly-cloudy-day") {
    iconSrc = "Assets/partly-cloudy.png";
  } else if (props.icons === "snow") {
    iconSrc = "Assets/snowy.png";
  } else if (props.icons === "rain") {
    iconSrc = "Assets/rainy.png";
  } else if (props.icons === "cloudy") {
    iconSrc = "Assets/cloudy.png";
  }

  return (
    <div className="card" style={{ width: 13 + "rem" }}>
      <div className="card-body">
        <h5 className="card-title display-block">{turkishDateWithDay}</h5>

        <p id="degreefont" className="degree fw-bold">
          {props.degree} °C
        </p>
        <div className="imgfont">
          <img className="imgTag" src={iconSrc} alt="image" />
        </div>
        <div className="windHumadity">
          <div className="humidityTag">
            <span className="humidity">{props.himidity}</span>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                viewBox="0 0 384 512"
              >
                <path d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z" />
              </svg>
            </div>
          </div>

          <div className="windTag">
            <span className="wind">{props.windspeed}</span>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                viewBox="0 0 512 512"
              >
                <path d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
