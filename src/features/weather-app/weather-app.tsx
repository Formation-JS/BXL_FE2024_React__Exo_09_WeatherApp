import { useState } from "react";
import SearchBar from "../../components/search-bar/search-bar";

export default function WeatherApp() {

    const [citySelected, setCitySelected] = useState<string | null>(null);

    const handleCitySearch = (city: string) => {
        setCitySelected(city);
    };

    return (
        <div>
            <SearchBar onSearch={handleCitySearch} />

        </div>
    );
}