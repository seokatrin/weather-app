import axios from "axios";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Addition from "./Components/Addition";
import Location from "./Components/Location";
import Temperature from "./Components/Temperature";
import { Global, media, themes, WrapperApp } from "./StylesComponents/Styles";

function App() {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lon = position.coords.longitude;
        const lat = position.coords.latitude;
        axios
          .get(
            `https://community-open-weather-map.p.rapidapi.com/weather?lat=${lat}&lon=${lon}&lang=ru`,
            {
              headers: {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key":
                  "dcd9a1c9f4mshd934c2fd3a4e7b7p13971bjsn0eb8512e2bc6",
              },
            }
          )
          .then((response) => {
            // const weather = {name: 'Бердяуш', time: 1640624853, temp: 259.49, feels_like: 252.49, sunrise: 1640579371, sunset: 1640605153, description: 'пасмурно', icon: "04n", speed: 3.95}
            const {name, dt: time, main: {temp, feels_like}, sys:{sunrise, sunset}, weather: [{description, icon}], wind: {speed}} = response.data
            setWeather({name, time, temp, feels_like, sunrise, sunset, description, icon, speed})
            console.log({name, time, temp, feels_like, sunrise, sunset, description, icon, speed})

          });
      });
    }
    // setWeather({
    //   name: "Бердяуш",
    //   time: 1640759330,
    //   temp: 259.49,
    //   feels_like: 252.49,
    //   sunrise: 1640752177,
    //   sunset: 1640778060,
    //   description: "пасмурно",
    //   icon: "04n",
    //   speed: 3.95,
    // });
  }, []);

  const temp = fromKtoC(weather.temp);
  const feels_like = fromKtoC(weather.feels_like);
  const wind = weather.speed && weather.speed.toFixed(1);
  let sun, suntime;
  if (weather.time > weather.sunrise && weather.time < weather.sunset) {
    sun = "Закат";
    suntime = getTime(weather.sunset);
  } else {
    sun = "Рассвет";
    suntime = getTime(weather.sunrise);
  }

  return (
    <ThemeProvider
      theme={
        sun === "Закат"
          ? { media, themes: themes.light }
          : { media, themes: themes.dark }
      }
    >
      <Global />
      <WrapperApp direction="column" justify="space-between" margin="0 auto">
        <Location>{weather.name}</Location>
        <Temperature icon={weather.icon} temp={temp} />
        <Addition
          feels_like={feels_like}
          wind={wind}
          sun={sun}
          suntime={suntime}
        />
      </WrapperApp>
    </ThemeProvider>
  );
}

export default App;

function fromKtoC(kelvin) {
  return Math.round(kelvin - 273.15);
}
function getTime(time) {
  return new Date(time * 1000).toLocaleTimeString().slice(0, -3);
}

// function fromFToCelcious(fahrenheit) {
//   return (fahrenheit - 32) * 5 / 9
// }
