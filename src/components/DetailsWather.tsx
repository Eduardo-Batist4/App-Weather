import { FaWater } from "react-icons/fa";
import { FaWind } from "react-icons/fa";

interface Details  {
    humidity: number | null;
    wind: number | null;
}

export const DetailsWather = (props: Details) => {
    return (
        <div className="details-container">
            <div className="humidity-container">
                <span className="icon-humidity"><FaWater /></span>
                <div className="humidity">
                    <span>{props.humidity}%</span>
                    <p>Humidity</p>
                </div>
            </div>
            <div className="wind-container">
                <span className="icon-wind"><FaWind /></span>
                <div className="wind">
                    <span>{props.wind}Km/h</span>
                    <p>Wind</p>
                </div>
            </div>
        </div>
    )
}