import { useEffect, useState } from "react";
import { DetailsWather } from "./components/DetailsWather"
import { InfoWather } from "./components/InfoWather"
import { SearchWather } from "./components/SearchWather"



function App() {
  const [humidity, setHumidity] = useState<number | null>(null)
  const [wind, setWind] = useState<number | null>(null)
  const [temperature, setTemperature] = useState<number | null>(null)
  const [description, setDescription] = useState('')

  const fetchData = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=${process.env.API_KEY}`;
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error('Erro ao recuperar os dados do clima');
      }
  
      const data = await response.json();
      setTemperature(data.main.temp);
      setDescription(data.weather[0].description);
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      console.log(data);
      return data;
    } catch (error) {
      console.error('Erro ao processar a solicitação:', error);
      return null;
    }
  };
  
  useEffect(() => {
    fetchData()
  }, []);

  const handleClick = (value: string) => {
    console.log(value)
  }

  return (
    <>
    <main className="wather-container"> 
      <SearchWather onSearch={handleClick} />
      <InfoWather description={description} temperature={temperature} />
      <DetailsWather humidity={humidity} wind={wind} />
    </main>
    </>
  )
}

export default App
