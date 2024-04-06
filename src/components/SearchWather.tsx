import { FaLocationDot } from "react-icons/fa6";
import { ButtonSearch } from "./ButtonSearch";
import { useState } from "react";

interface SearchWeatherProps {
    onSearch: (value: string) => void;
}

export const SearchWeather: React.FC<SearchWeatherProps> = ({ onSearch }) => { 
    const [searchValue, setSearchValue] = useState('');

    const handleSubmit = (ev: React.FormEvent) => {
        ev.preventDefault();
        onSearch(searchValue);
    };

    return (
        <div className="search-container">
            <form onSubmit={handleSubmit}>
                <span className="icon-search"><FaLocationDot /></span>
                <input 
                type="text" 
                placeholder="London" 
                className="input-search" 
                value={searchValue} 
                onChange={(ev) => setSearchValue(ev.target.value)} />
                <ButtonSearch />
            </form>
        </div>
    )
}

