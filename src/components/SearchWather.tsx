import { FaLocationDot } from "react-icons/fa6";
import { ButtonSearch } from "./ButtonSearch";

export const SearchWather = () => { 
    return (
        <div className="search-container">
            <form>
                <span className="icon-search"><FaLocationDot /></span>
                <input type="text" placeholder="search..."  className="input-search"/>
                <ButtonSearch />
            </form>
        </div>
    )
}

