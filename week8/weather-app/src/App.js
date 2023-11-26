import axios from "axios";
import { useState } from "react";

function App() {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  let response = null;
  const searchWeather = async (e) => {
    if (e.key === "Enter") {
      try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=38364d59d426aad4753a1aef07eda72c`;
        response = await axios.get(url);
        console.log(response.data);
        setWeather([
          response.data.main.temp,
          response.data.weather[0].description,
        ]);
      } catch (error) {
        console.log("에러 : " + error);
      }
    }
  };
  return (
    <div className="App">
      <input
        type="text"
        placeholder="도시를 입력하세요"
        onChange={(e) => {
          setLocation(e.target.value);
        }}
        onKeyDown={searchWeather}
      ></input>
      {weather == null ? null : (
        <div className="weatherResult">
          <div>{location}</div>
          <div>{Math.round((weather[0] - 273.15) * 10) / 10}</div>
          <div>{weather[1]}</div>
        </div>
      )}
    </div>
  );
}

export default App;
