import { useState } from "react";
import { DetailsWather } from "./components/DetailsWather"
import { InfoWather } from "./components/InfoWather"
import { SearchWather } from "./components/SearchWather"

import rain from "./assets/rain.png";
import snow from "./assets/snow.png";
import mist from "./assets/mist.png";
import cloud from "./assets/cloud.png";
import clear from "./assets/clear.png";

function App() {
  const [humidity, setHumidity] = useState<number | null>(null)
  const [wind, setWind] = useState<number | null>(null)
  const [temperature, setTemperature] = useState<number | null>(null)
  const [description, setDescription] = useState('')
  const [chuva, setChuva] = useState('')

  
  
  const fetchData = async (inputValue: string) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=${process.env.API_KEY}`;
      
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error('Erro ao recuperar os dados do clima');
      }
  
      const data = await response.json();
      setTemperature(data.main.temp);
      setDescription(data.weather[0].description);
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);

      changeImg(data.weather[0].main)

      console.log(data);
      return data;
    } catch (error) {
      console.error('Erro ao processar a solicitação:', error);
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
        setChuva(cloud)
    }
  }

  return (
    <>
    <main className="wather-container"> 
      <SearchWather onSearch={handleClick} />
      <InfoWather img={chuva} description={description} temperature={temperature} />
      <DetailsWather humidity={humidity} wind={wind} />
    </main>
    </>
  )
}

export default App
