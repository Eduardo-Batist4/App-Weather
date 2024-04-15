import { useState } from "react";
import { DetailsWeather } from "./components/DetailsWather"
import { InfoWeather } from "./components/InfoWather"
import { SearchWeather } from "./components/SearchWather"

import rain from "./assets/rain.png";
import snow from "./assets/snow.png";
import mist from "./assets/mist.png";
import cloud from "./assets/cloud.png";
import clear from "./assets/clear.png";
import notFound from "./assets/404.png";
import { NotFound } from "./components/NotFound";

function App() {
  const [humidity, setHumidity] = useState<number | null>(null)
  const [wind, setWind] = useState<number | null>(null)
  const [temperature, setTemperature] = useState<number | null>(null)
  const [description, setDescription] = useState('')
  const [chuva, setChuva] = useState('')
  const [classNameInfo, setClassNameInfo] = useState('info-weather-container-off');
  const [classNameDetails, setClassNameDetails] = useState('details-container-off');
  const [classNameNot, setClassNameNot] = useState('notFound-container-off');

  
  
  const fetchData = async (inputValue: string) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=${process.env.API_KEY}`;
      
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error('Error recovering weather data');
      }
  
      const data = await response.json();
      setTemperature(data.main.temp);
      setDescription(data.weather[0].description);
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);

      changeImg(data.weather[0].main)
      setClassNameInfo("info-weather-container");
      setClassNameDetails("details-container");
      setClassNameNot("notFound-container-off");


      console.log(data);
      return data;
    } catch (error) {
      console.error('Error processing request:', error);
      setClassNameNot("notFound-container");
      setClassNameInfo("info-weather-container-off");
      setClassNameDetails("details-container-off");
      return null;
    }
  };

  const handleClick = (value: string) => {
    fetchData(value);
  }

  const changeImg = (image: string) => {
    switch (image){
      case 'Clouds':
        setChuva(cloud)
        break
      case 'Snow':
        setChuva(snow)
        break 
      case 'Rain':
        setChuva(rain)
        break 
      case 'Clear':
        setChuva(clear)
        break 
      case 'Mist':
        setChuva(mist)
        break 
      case 'Haze':
        setChuva(mist)
        break 
      default:
        setChuva(notFound)
    }
  }

  return (
    <>
    <main className="weather-container"> 
      <SearchWeather onSearch={handleClick} />
      <InfoWeather classList={classNameInfo} img={chuva} description={description} temperature={Number(temperature?.toFixed(0))} />
      <DetailsWeather className={classNameDetails} humidity={humidity} wind={wind} />
      <NotFound className={classNameNot} />
    </main>
    </>
  )
}

export default App
